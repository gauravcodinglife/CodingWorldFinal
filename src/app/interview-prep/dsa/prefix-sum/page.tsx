
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";

const prefixSumTemplate = `
function prefixSum(arr) {
  const prefix = new Array(arr.length).fill(0);
  prefix[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }

  return prefix;
}

function rangeSum(prefix, left, right) {
  if (left === 0) {
    return prefix[right];
  }

  return prefix[right] - prefix[left - 1];
}
`;

const problems = [
  {
    title: "Range Sum Query - Immutable",
    description: "Given an integer array nums, handle multiple queries of the following type: Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.",
    href: "https://leetcode.com/problems/range-sum-query-immutable/",
  },
  {
    title: "Subarray Sum Equals K",
    description: "Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.",
    href: "https://leetcode.com/problems/subarray-sum-equals-k/",
  },
  {
    title: "Find Pivot Index",
    description: "Given an array of integers nums, calculate the pivot index of this array.",
    href: "https://leetcode.com/problems/find-pivot-index/",
  },
];

export default function PrefixSumPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Prefix Sum Pattern
        </h1>
      </div>

      <div>
        <h2 className="font-headline text-3xl font-bold mb-4">Explanation</h2>
        <p className="text-lg text-muted-foreground mb-4">
          The Prefix Sum pattern is a technique that involves pre-calculating the sum of all elements up to a certain index in an array. This allows you to quickly calculate the sum of any subarray in O(1) time. The key idea is to create a new array, often called a prefix sum array, where each element at index i is the sum of all elements from index 0 to i in the original array.
        </p>

        <h2 className="font-headline text-3xl font-bold mb-4">When to Use</h2>
        <p className="text-lg text-muted-foreground mb-4">
          You should consider using the Prefix Sum pattern when you need to answer multiple queries about the sum of a subarray. It's particularly useful when the array is immutable, meaning it doesn't change between queries. If the array is mutable, you might need to use a more advanced data structure, such as a segment tree.
        </p>

        <h2 className="font-headline text-3xl font-bold mb-4">Template Code</h2>
        <CodeBlock code={prefixSumTemplate} language="javascript" />

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
          <li>Off-by-one errors when calculating the range sum.</li>
          <li>Not handling the case where the left index is 0.</li>
          <li>Forgetting that the prefix sum array is 1-indexed in some implementations.</li>
        </ul>

        <h2 className="font-headline text-3xl font-bold mb-4 mt-8">Time & Space Complexity</h2>
        <p className="text-lg text-muted-foreground">
          The time complexity of creating the prefix sum array is O(n), where n is the length of the array. The time complexity of calculating the sum of a subarray is O(1). The space complexity is O(n) to store the prefix sum array.
        </p>
      </div>
    </div>
  );
}
