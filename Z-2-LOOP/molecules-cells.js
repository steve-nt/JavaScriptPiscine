function RNA(dna) {
	let result = '';
	for (let i = 0; i < dna.length; i++) {
		if (dna[i] === 'G') {
			result += 'C';
		} else if (dna[i] === 'C') {
			result += 'G';
		} else if (dna[i] === 'T') {
			result += 'A';
		} else if (dna[i] === 'A') {
			result += 'U';
		}
	}
	return result;
}

function DNA(rna) {
	let result = '';
	for (let i = 0; i < rna.length; i++) {
		if (rna[i] === 'C') {
			result += 'G';
		} else if (rna[i] === 'G') {
			result += 'C';
		} else if (rna[i] === 'A') {
			result += 'T';
		} else if (rna[i] === 'U') {
			result += 'A';
		}
	}
	return result;
}

/*
WHAT THE CODE DOES:
- Converts between DNA and RNA strands using biological complement rules
- DNA -> RNA: G↔C, T→A, A→U
- RNA -> DNA: C↔G, A→T, U→A
- Performs character-by-character translation
- Used in bioinformatics applications

POSSIBLE CHALLENGES:
- Understanding biological complement base pairing
- Character-by-character mapping and lookup
- Handling all valid nucleotide codes
- Invalid character detection and validation
- Performance with very long sequences (real genomes)

CONCEPTS TO LEARN:
- String iteration and character mapping
- Domain-specific knowledge (biology)
- Pattern matching and substitution
- Reversible transformations (inverse operations)
- Data validation and error handling

BONUS CHALLENGES:
- Add validation for valid nucleotides (throw on invalid chars)
- Implement using object/map lookup instead of if/else
- Add support for ambiguous nucleotide codes (IUPAC)
- Create codon translation (DNA triplets to amino acids)
- Implement reverse complement (complement + reverse)
- Add performance optimizations for large sequences
- Create a stream processor for biological file formats
*/
