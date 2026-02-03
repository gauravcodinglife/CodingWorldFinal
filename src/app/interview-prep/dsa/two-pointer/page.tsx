
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";

const twoPointerTemplate = `
function twoPointer(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // ... your logic here

    if (condition) {
      left++;
    } else {
      right--;
    }
  }
}
`;

const problems = [
  {
    title: "Two Sum II - Input Array Is Sorted",
    description: "Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.",
    href: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
  },
  {
    title: "3Sum",
    description: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
    href: "https://leetcode.com/problems/3sum/",
  },
  {
    title: "Container With Most Water",
    description: "Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.",
    href: "https://leetcode.com/problems/container-with-most-water/",
  },
];

export default function TwoPointerPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Two Pointer Pattern
        </h1>
      </div>

      <div>
        <h2 className="font-headline text-3xl font-bold mb-4">Explanation</h2>
        <p className="text-lg text-muted-foreground mb-4">
          The Two Pointer pattern is a technique that uses two pointers to iterate over an array or a sequence. It's particularly useful when you need to find a pair of elements that satisfy a certain condition, or when you need to work with a subarray. The key idea is to have two pointers, usually starting at the beginning and end of the array, and then move them towards each other until they meet.
        </p>

        <h2 className="font-headline text-3xl font-bold mb-4">When to Use</h2>
        <p className="text-lg text-muted-foreground mb-4">
          You should consider using the Two Pointer pattern when you encounter a problem that involves finding a pair of elements in a sorted array, or when you need to find a subarray that satisfies a certain condition. For example, if the problem asks you to find two numbers that add up to a target, or to find the longest subarray with a certain property, the Two Pointer pattern might be a good fit.
        </p>

        <h2 className="font-headline text-3xl font-bold mb-4">Template Code</h2>
        <CodeBlock code={twoPointerTemplate} language="javascript" />

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
          <li>Forgetting to handle the case where the pointers cross each other.</li>
          <li>Not moving the correct pointer, or moving both pointers at the same time.</li>
          <li>Not handling edge cases, such as an empty array or an array with only one element.</li>
        </ul>

        <h2 className="font-headline text-3xl font-bold mb-4 mt-8">Time & Space Complexity</h2>
        <p className="text-lg text-muted-foreground">
          The time complexity of the Two Pointer pattern is usually O(n), where n is the length of the array, because you are iterating over the array only once. The space complexity is usually O(1), because you are using only a constant amount of extra space.
        </p>
      </div>
    </div>
  );
}
