import { CodeBlock } from "@/components/ui/code-block";

export default function VendingMachinePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose max-w-none">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Design a Vending Machine</h1>

        <h2 className="font-headline text-3xl font-bold mt-8">1. Requirements and Goals of the System</h2>
        <p>
          We need to design a vending machine that dispenses items. The user should be able to select an item, insert money, and receive the item and any change.
        </p>
        <h3 className="font-headline text-2xl font-bold mt-4">Functional Requirements:</h3>
        <ul className="list-disc list-inside">
          <li>Users can select an item from a list of available items.</li>
          <li>The vending machine accepts coins and notes.</li>
          <li>The vending machine returns the selected item and any change.</li>
          <li>The vending machine should keep track of the inventory of items and the amount of money it holds.</li>
        </ul>
        <h3 className="font-headline text-2xl font-bold mt-4">Non-Functional Requirements:</h3>
        <ul className="list-disc list-inside">
          <li><strong>Reliability:</strong> The vending machine should be reliable and not prone to failures.</li>
          <li><strong>Concurrency:</strong> The vending machine should handle one user at a time.</li>
        </ul>

        <h2 className="font-headline text-3xl font-bold mt-8">2. High-Level Design</h2>
        <p>
          We can model the vending machine as a state machine. The vending machine will be in different states depending on the user's actions.
        </p>
        <div className="flex justify-center">
          {/* Placeholder for a diagram */}
          <img src="/placeholder.svg" alt="High-Level Design" className="w-full max-w-2xl" />
        </div>

        <h2 className="font-headline text-3xl font-bold mt-8">3. Deep Dive</h2>
        <p>
          Let's define the states and the transitions between them.
        </p>
        <h3 className="font-headline text-2xl font-bold mt-4">States:</h3>
        <ul className="list-disc list-inside">
          <li><strong>Idle:</strong> The initial state of the vending machine.</li>
          <li><strong>AcceptingMoney:</strong> The state where the vending machine is accepting money from the user.</li>
          <li><strong>DispensingItem:</strong> The state where the vending machine is dispensing the selected item.</li>
          <li><strong>DispensingChange:</strong> The state where the vending machine is dispensing change.</li>
        </ul>
        <h3 className="font-headline text-2xl font-bold mt-4">Class Diagram:</h3>
        <p>
          We can use a class diagram to model the different components of the vending machine.
        </p>
        <div className="flex justify-center">
          {/* Placeholder for a diagram */}
          <img src="/placeholder.svg" alt="Class Diagram" className="w-full max-w-2xl" />
        </div>

        <h2 className="font-headline text-3xl font-bold mt-8">4. Putting It All Together</h2>
        <p>
          The user interacts with the vending machine through a user interface. The user interface communicates with the vending machine's controller, which manages the state of the vending machine. The controller interacts with the inventory and the cash box to dispense items and change.
        </p>
        <div className="flex justify-center">
          {/* Placeholder for a diagram */}
          <img src="/placeholder.svg" alt="Final Architecture" className="w-full max-w-2xl" />
        </div>
      </div>
    </div>
  );
}
