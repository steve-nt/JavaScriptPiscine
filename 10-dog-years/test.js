// Test cases
const testCases = [
    { planet: "earth", seconds: 1000000000, expected: 221.82 },
    { planet: "mercury", seconds: 1000000000, expected: 921.12 },
    { planet: "venus", seconds: 1000000000, expected: 352.61 },
    { planet: "mars", seconds: 1000000000, expected: 117.96 },
    { planet: "jupiter", seconds: 1000000000, expected: 18.69 },
    { planet: "saturn", seconds: 1000000000, expected: 7.46 },
    { planet: "uranus", seconds: 1000000000, expected: 2.37 },
    { planet: "neptune", seconds: 1000000000, expected: 1.20 }
];

// Run tests and display results
let resultsHTML = "";
let passCount = 0;

testCases.forEach(test => {
    const result = dogYears(test.planet, test.seconds);
    const isPassed = result === test.expected;
    if (isPassed) passCount++;

    resultsHTML += `
        <div class="test-case ${isPassed ? 'pass' : 'fail'}">
            <strong>Test: ${test.planet.toUpperCase()}</strong><br>
            Result: <code>${result}</code> 
            <span class="${isPassed ? 'passed' : 'failed'}">
                ${isPassed ? '✓ PASS' : '✗ FAIL'}
            </span><br>
            Expected: <code>${test.expected}</code>
        </div>
    `;
});

resultsHTML += `
    <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e9; border-radius: 4px;">
        <strong>Summary: ${passCount}/${testCases.length} tests passed</strong>
        ${passCount === testCases.length ? 
            '<p style="color: #4CAF50;">✓ All tests passed! Your solution is correct!</p>' : 
            '<p style="color: #f44336;">✗ Some tests failed. Check your function.</p>'}
    </div>
`;

document.getElementById("results").innerHTML = resultsHTML;

// Also log to console
console.log("Test results logged to page. Check above for details.");
