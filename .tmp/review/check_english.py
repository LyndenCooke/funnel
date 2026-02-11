"""
Scan HTML files for American English spellings and forbidden patterns.
Usage: python .tmp/review/check_english.py index.html
"""
import re
import sys

AMERICAN_PATTERNS = [
    (r'\borganiz', 'organis'),
    (r'\bcustomiz', 'customis'),
    (r'\bspecializ', 'specialis'),
    (r'\brecogniz', 'recognis'),
    (r'\boptimiz', 'optimis'),
    (r'\bsynchroniz', 'synchronis'),
    (r'\bminimiz', 'minimis'),
    (r'\bmaximiz', 'maximis'),
    (r'\bsceptic', None),  # correct British, flag if "skeptic" found
    (r'\bskeptic', 'sceptic'),
    (r'\bcenter\b', 'centre'),  # only in visible text, not CSS
    (r'\bcolor\b', 'colour'),   # only in visible text, not CSS
    (r'\bfavor', 'favour'),
    (r'\bbehavior', 'behaviour'),
]

FORBIDDEN_PHRASES = [
    'revolutionise', 'unlock your potential', 'game-changing',
    'cutting-edge', 'synergy', 'holistic', 'paradigm shift',
    'next-level', 'best-in-class', 'world-class', 'seamless',
    'empower', 'elevate', 'harness the power', 'deep dive',
]

DASH_PATTERN = re.compile(r'[\u2013\u2014]')  # en dash, em dash

def check_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Strip CSS and JS blocks for text-only checks
    # Simple approach: check everything but flag location
    lines = content.split('\n')
    issues = []

    for i, line in enumerate(lines, 1):
        # Skip lines that are clearly CSS or JS
        stripped = line.strip()
        if stripped.startswith('--') or stripped.startswith('color:') or stripped.startswith('background'):
            continue

        for pattern, replacement in AMERICAN_PATTERNS:
            if re.search(pattern, line, re.IGNORECASE):
                fix = f" (use '{replacement}')" if replacement else ""
                issues.append(f"  Line {i}: American spelling '{pattern}'{fix}")
                issues.append(f"    {stripped[:100]}")

        for phrase in FORBIDDEN_PHRASES:
            if phrase.lower() in line.lower():
                issues.append(f"  Line {i}: Forbidden phrase '{phrase}'")
                issues.append(f"    {stripped[:100]}")

        if DASH_PATTERN.search(line):
            issues.append(f"  Line {i}: Em dash or en dash found")
            issues.append(f"    {stripped[:100]}")

    if issues:
        print(f"ISSUES FOUND in {filepath}:")
        for issue in issues:
            print(issue)
    else:
        print(f"No issues found in {filepath}.")

    return len(issues) > 0

if __name__ == "__main__":
    filepath = sys.argv[1] if len(sys.argv) > 1 else "index.html"
    check_file(filepath)
