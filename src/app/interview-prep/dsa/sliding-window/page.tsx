
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";

const slidingWindowTemplate = `
function slidingWindow(arr, k) {
  let windowStart = 0;
  let windowSum = 0;
  let minLength = Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    while (windowSum >= k) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}
`;

const problems = [
  {
    title: "Minimum Size Subarray Sum",
    description: "Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.",
    href: "https://leetcode.com/problems/minimum-size-subarray-sum/",
  },
  {
    title: "Longest Substring Without Repeating Characters",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    href: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
  },
  {
    title: "Permutation in String",
    description: "Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.",
    href: "https://leetcode.com/problems/permutation-in-string/",
  },
];

export default function SlidingWindowPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Sliding Window Pattern
        </h1>
      </div>

      <div>
        <h2 className="font-headline text-3xl font-bold mb-4">Explanation</h2>
        <p className="text-lg text-muted-foreground mb-4">
          The Sliding Window pattern is a technique that involves maintaining a window of a certain size that slides over an array or a string. It's particularly useful for problems that involve finding a contiguous subarray or substring that satisfies a certain condition. The key idea is to expand the window by moving the end pointer, and then shrink the window by moving the start pointer when the condition is no longer met.
        </p>

        <h2 className="font-headline text-3xl font-bold mb-4">When to Use</h2>
        <p className="text-lg text-muted-foreground mb-4">
          You should consider using the Sliding Window pattern when you encounter a problem that involves finding the longest, shortest, or optimal subarray or substring. For example, if the problem asks you to find the minimum size subarray with a sum greater than or equal to a target, or to find the longest substring without repeating characters, the Sliding Window pattern is a good choice.
        </p>

        <h2 className="font-headline text-3xl font-bold mb-4">Template Code</h2>
        <CodeBlock code={slidingWindowTemplate} language="javascript" />

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
          <li>Incorrectly updating the window sum or other variables.</li>
          <li>Not shrinking the window at the right time.</li>
          <li>Not handling edge cases, such as an empty array or a window size of 0.</li>
        </ul>

        <h2 className="font-headline text-3xl font-bold mb-4 mt-8">Time & Space Complexity</h2>
        <p className="text-lg text-muted-foreground">
          The time complexity of the Sliding Window pattern is usually O(n), where n is the length of the array, because each element is visited at most twice (once by the start pointer and once by the end pointer). The space complexity is usually O(1) or O(k), where k is the size of the window, depending on whether you need to store the elements in the window.
        </p>
      </div>
    </div>
  );
}
