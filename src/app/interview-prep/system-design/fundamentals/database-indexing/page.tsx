import { CodeBlock } from "@/components/ui/code-block";

export default function DatabaseIndexingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose max-w-none">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Database Indexing</h1>

        <h2 className="font-headline text-3xl font-bold mt-8">Definition</h2>
        <p>
          A database index is a data structure that improves the speed of data retrieval operations on a database table at the cost of additional writes and storage space to maintain the index data structure. Indexes are used to quickly locate data without having to search every row in a database table every time a table is accessed.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Why is it Needed?</h2>
        <p>
          As a database table grows, searching for a specific row can become very slow. Without an index, the database has to scan the entire table to find the data you are looking for. An index allows the database to find the data much more quickly, similar to how an index in a book allows you to find a specific topic without reading the entire book.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Real-World Example</h2>
        <p>
          Imagine a library with thousands of books. If you want to find a specific book, you can use the library's catalog, which is indexed by title, author, and subject. This is much faster than searching for the book shelf by shelf. A database index works in a similar way, allowing for quick lookups of data in a large table.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Interview Questions</h2>
        <ul className="list-disc list-inside">
          <li>What is a database index and how does it work?</li>
          <li>What are the trade-offs of using indexes?</li>
          <li>What is the difference between a clustered and a non-clustered index?</li>
          <li>How would you choose which columns to index?</li>
        </ul>
      </div>
    </div>
  );
}
