#!/usr/bin/env python3
"""
Merge benchmark results from three sources and generate a comparison report.

Sources:
1. Upstream: Original safetensors (v0.7.0)
2. Plain: CryptoTensors without encryption
3. Encrypted: CryptoTensors with encryption enabled
"""

import argparse
import json
import os
import pandas as pd
from pathlib import Path

def load_benchmark_json(filepath):
    """Load pytest-benchmark JSON file."""
    if not os.path.exists(filepath):
        print(f"Warning: File not found: {filepath}")
        return None
    with open(filepath) as f:
        return json.load(f)

def extract_benchmarks(data, source_name):
    """Extract benchmark data into list of dicts."""
    if data is None:
        return []
    
    benchmarks = []
    for bench in data.get('benchmarks', []):
        # Convert seconds to milliseconds for better readability
        mean_ms = bench['stats']['mean'] * 1000
        stddev_ms = bench['stats']['stddev'] * 1000
        median_ms = bench['stats']['median'] * 1000
        
        benchmarks.append({
            'source': source_name,
            'name': bench['name'],
            'mean_ms': mean_ms,
            'stddev_ms': stddev_ms,
            'median_ms': median_ms
        })
    return benchmarks

def calculate_comparison(df):
    """Calculate performance comparison vs upstream."""
    # Pivot to get upstream, crypto-plain, crypto-encrypted as columns
    pivot = df.pivot(index='name', columns='source', values='mean_ms')
    
    # Ensure all columns exist, fill with NaN if missing
    for col in ['upstream', 'crypto-plain', 'crypto-encrypted']:
        if col not in pivot.columns:
            pivot[col] = float('nan')
    
    # Calculate relative performance vs upstream
    if 'upstream' in pivot.columns:
        pivot['plain_vs_upstream_pct'] = (
            (pivot['crypto-plain'] - pivot['upstream']) / pivot['upstream'] * 100
        )
        pivot['encrypted_vs_upstream_pct'] = (
            (pivot['crypto-encrypted'] - pivot['upstream']) / pivot['upstream'] * 100
        )
    else:
        pivot['plain_vs_upstream_pct'] = float('nan')
        pivot['encrypted_vs_upstream_pct'] = float('nan')
    
    return pivot

def format_markdown_table(df):
    """Generate markdown comparison table."""
    lines = [
        "# Benchmark Results Comparison",
        "",
        "## Performance Overview (Mean time in ms)",
        "",
        "| Benchmark | Upstream (v0.7.0) | CryptoTensors (plain) | CryptoTensors (encrypted) | vs Upstream (plain / enc) |",
        "|:----------|:------------------:|:----------------------:|:--------------------------:|:--------------------------:|"
    ]
    
    # Sort by name for consistency
    df = df.sort_index()
    
    for idx, row in df.iterrows():
        upstream_str = f"{row['upstream']:.3f}" if not pd.isna(row['upstream']) else "N/A"
        plain_str = f"{row['crypto-plain']:.3f}" if not pd.isna(row['crypto-plain']) else "N/A"
        enc_str = f"{row['crypto-encrypted']:.3f}" if not pd.isna(row['crypto-encrypted']) else "N/A"
        
        diff_plain = f"{row['plain_vs_upstream_pct']:+.1f}%" if not pd.isna(row['plain_vs_upstream_pct']) else "N/A"
        diff_enc = f"{row['encrypted_vs_upstream_pct']:+.1f}%" if not pd.isna(row['encrypted_vs_upstream_pct']) else "N/A"
        
        diff_str = f"{diff_plain} / {diff_enc}"
        
        lines.append(
            f"| {idx} | {upstream_str} | {plain_str} | {enc_str} | {diff_str} |"
        )
    
    lines.append("")
    lines.append("---")
    lines.append("*Negative percentage means faster than upstream.*")
    
    return "\n".join(lines)

def main():
    parser = argparse.ArgumentParser(description="Merge and compare benchmark results.")
    parser.add_argument('--upstream', help="Path to upstream benchmark JSON")
    parser.add_argument('--plain', help="Path to plain CryptoTensors benchmark JSON")
    parser.add_argument('--encrypted', help="Path to encrypted CryptoTensors benchmark JSON")
    parser.add_argument('--output', required=True, help="Path to save merged results JSON")
    parser.add_argument('--markdown', required=True, help="Path to save comparison markdown")
    args = parser.parse_args()
    
    # Load all benchmark data
    upstream_data = load_benchmark_json(args.upstream) if args.upstream else None
    plain_data = load_benchmark_json(args.plain) if args.plain else None
    encrypted_data = load_benchmark_json(args.encrypted) if args.encrypted else None
    
    # Extract and combine
    all_benchmarks = []
    if upstream_data:
        all_benchmarks.extend(extract_benchmarks(upstream_data, 'upstream'))
    if plain_data:
        all_benchmarks.extend(extract_benchmarks(plain_data, 'crypto-plain'))
    if encrypted_data:
        all_benchmarks.extend(extract_benchmarks(encrypted_data, 'crypto-encrypted'))
    
    if not all_benchmarks:
        print("Error: No benchmark data found to merge.")
        return

    df = pd.DataFrame(all_benchmarks)
    
    # Calculate comparison
    comparison = calculate_comparison(df)
    
    # Generate markdown
    markdown_content = format_markdown_table(comparison)
    with open(args.markdown, 'w') as f:
        f.write(markdown_content)
    
    # Merge for benchmark-action storage (use plain as base if available, else upstream)
    # The action expects a specific format produced by pytest-benchmark
    base_data = plain_data if plain_data else (upstream_data if upstream_data else encrypted_data)
    
    # Optional: We could combine the benchmarks lists from all sources into one JSON
    # so that the benchmark-action can track all of them.
    merged = base_data.copy()
    if 'benchmarks' in merged:
        # We might want to rename benchmarks to include source prefix if we merge them
        # but for now, we just save the current branch's results as the "official" ones.
        pass
        
    with open(args.output, 'w') as f:
        json.dump(merged, f, indent=2)
    
    print(f"Comparison report generated at: {args.markdown}")
    print(f"Merged results saved at: {args.output}")

if __name__ == '__main__':
    main()

