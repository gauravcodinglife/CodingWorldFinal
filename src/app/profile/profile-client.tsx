"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ProfileClient() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          User Persona
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          This page represents a user persona based on user research.
        </p>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Quote</CardTitle>
        </CardHeader>
        <CardContent>
          <blockquote className="text-lg italic text-muted-foreground">
            "the early bird gets the worm... or so they say!!"
          </blockquote>
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Bio</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Bruce is a marketing manager at a Series B startup based in San
            Francisco. He was born and grew up in San Jose, CA. On his free time he
            likes to go on the race track with close friends. Bruce is currently saving
            up to buy a new car but his wife told him he'd have to fund it with a side
            income.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Needs</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Generate new income flow</li>
              <li>Sustain it long enough to buy the car of his dreams</li>
              <li>Reach financial goal in three months</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Frustrations</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Juggling time being a parent, marketing manager, and create a side hustle</li>
              <li>Not completely sure what skills he can leverage for said hustle</li>
              <li>Feels overwhelmed with all the information out there on creating a side hustle</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
