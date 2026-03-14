export function findIP(str) {
  
  const octet = '(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])';
  
  const port = '(?::(?:6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{1,3}|[0-9]))?';
  
  const regex = new RegExp(`(?<![\\d\\.])${octet}\\.${octet}\\.${octet}\\.${octet}${port}(?!\\d|:)`, 'g');
  
  return Array.from(str.matchAll(regex), m => m[0]);
}

/*
 * EXPLANATION:
 * Validates and extracts valid IPv4 addresses with optional TCP ports from a string.
 * 
 * KEY CONCEPTS:
 * - Alternation: (a|b|c) matches any one of the alternatives
 * - Lookarounds: (?<!...) negative lookbehind, (?!...) negative lookahead
 * - Non-Capturing Groups: (?:...) for grouping without captures
 * - Character Ranges: Specific patterns for different ranges (0-255)
 * 
 * HOW IT WORKS:
 * 
 * Octet Pattern (0-255):
 * - 25[0-5]        : 250-255
 * - 2[0-4][0-9]    : 200-249
 * - 1[0-9]{2}      : 100-199
 * - [1-9][0-9]     : 10-99
 * - [0-9]          : 0-9
 * (Rejects leading zeros like 01, 001)
 * 
 * Port Pattern (0-65535):
 * - 6553[0-5]                : 65530-65535
 * - 655[0-2][0-9]            : 65500-65529
 * - 65[0-4][0-9]{2}          : 65000-65499
 * - 6[0-4][0-9]{3}           : 60000-64999
 * - [1-5][0-9]{4}            : 10000-59999
 * - [1-9][0-9]{1,3}          : 10-9999
 * - [0-9]                    : 0-9
 * (Optional: ?: makes entire port pattern optional)
 * 
 * Lookarounds prevent false matches in edge cases
 * 
 * REAL-WORLD EXAMPLE:
 * Network monitoring: Extract server addresses from logs
 * "Connected to 192.168.1.100:8080 failed, retry 192.168.1.101:3306"
 * → ["192.168.1.100:8080", "192.168.1.101:3306"]
 * Used in DevOps automation, log parsing, configuration validation
 * 
 * BONUS CHALLENGES:
 * 1. Return objects with {ip, port} separated
 * 2. Validate IP against private ranges (10.x.x.x, 172.16-31.x.x, 192.168.x.x)
 * 3. Support IPv6 addresses
 * 4. Resolve hostnames to IPs and validate both formats
 */