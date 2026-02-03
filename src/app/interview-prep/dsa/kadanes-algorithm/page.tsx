
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";

const kadanesAlgorithmTemplate = `
function kadanesAlgorithm(arr) {
  let maxSoFar = -Infinity;
  let maxEndingHere = 0;

  for (let i = 0; i < arr.length; i++) {
    maxEndingHere += arr[i];

    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
    }

    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }
  }

  return maxSoFar;
}
`;

const problems = [
  {
    title: "Maximum Subarray",
    description: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    href: "https://leetcode.com/problems/maximum-subarray/",
  },
  {
    title: "Maximum Product Subarray",
    description: "Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.",
    href: "https://leetcode.com/problems/maximum-product-subarray/",
  },
  {
    title: "Maximum Sum Circular Subarray",
    description: "Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.",
    href: "https://leetcode.com/problems/maximum-sum-circular-subarray/",
  },
];

export default function KadanesAlgorithmPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Kadane's Algorithm
        </h1>
      </div>

      <div>
        <h2 className="font-headline text-3xl font-bold mb-4">Explanation</h2>
        <p className="text-lg text-muted-foreground mb-4">
          Kadane's Algorithm is a dynamic programming algorithm that is used to find the maximum subarray sum in a given array. It is a very efficient algorithm that can solve the problem in O(n) time. The key idea is to iterate over the array and keep track of the maximum sum ending at the current index, and the maximum sum found so far.
        </p>

        <h2 className="font-headline text-3xl font-bold mb-4">When to Use</h2>
        <p className="text-lg text-muted-foreground mb-4">
          You should use Kadane's Algorithm when you need to find the maximum subarray sum in a 1D array. It can also be extended to solve problems in 2D arrays. If the problem asks for the maximum subarray sum, and the array contains both positive and negative numbers, Kadane's Algorithm is the way to go.
        </p>

        <h2 className="font-headline text-3xl font-bold mb-4">Template Code</h2>
        <CodeBlock code={kadanesAlgorithmTemplate} language="javascript" />

        <h2 className="font-headline text-3xl font-bold mb-4 mt-8">Problems</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem) => (
            <a href={problem.href} key={problem.title} target="_blank" rel="noopener noreferrer">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">
                    {problem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <h2 className="font-headline text-3xl font-bold mb-4 mt-8">Common Mistakes</h2>
        <ul className="list-disc list-inside text-lg text-muted-foreground">
          <li>Not initializing the `maxSoFar` variable to a small enough number.</li>
          <li>Resetting the `maxEndingHere` variable to 0 at the wrong time.</li>
          <li>Not handling the case where all the numbers in the array are negative.</li>
        </ul>

        <h2 className="font-headline text-3xl font-bold mb-4 mt-8">Time & Space Complexity</h2>
        <p className="text-lg text-muted-foreground">
          The time complexity of Kadane's Algorithm is O(n), where n is the length of the array, because you are iterating over the array only once. The space complexity is O(1), because you are using only a constant amount of extra space.
        </p>
      </div>
    </div>
  );
}
