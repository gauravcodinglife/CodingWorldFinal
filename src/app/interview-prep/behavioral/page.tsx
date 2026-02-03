'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { questions, roles, skillCategories, BehavioralQuestion, Role, SkillCategory } from './questions';

export default function BehavioralInterviewPage() {
  const [selectedRole, setSelectedRole] = useState<Role | 'All'>('All');
  const [selectedSkill, setSelectedSkill] = useState<SkillCategory | 'All'>('All');
  const [currentQuestion, setCurrentQuestion] = useState<BehavioralQuestion | null>(null);
  const [filteredQuestions, setFilteredQuestions] = useState<BehavioralQuestion[]>(questions);

  useEffect(() => {
    let newFilteredQuestions = questions;

    if (selectedRole !== 'All') {
      newFilteredQuestions = newFilteredQuestions.filter(q => q.roles.includes(selectedRole));
    }

    if (selectedSkill !== 'All') {
      newFilteredQuestions = newFilteredQuestions.filter(q => q.category === selectedSkill);
    }

    setFilteredQuestions(newFilteredQuestions);
  }, [selectedRole, selectedSkill]);

  const generateRandomQuestion = () => {
    if (filteredQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
      setCurrentQuestion(filteredQuestions[randomIndex]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Behavioral Interview Practice</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Practice realistic behavioral questions and learn to structure your answers with the STAR method.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Controls and STAR Method */}
        <div className="md:col-span-1 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="role-select" className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <Select onValueChange={(value: Role | 'All') => setSelectedRole(value)} defaultValue="All">
                  <SelectTrigger id="role-select">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Roles</SelectItem>
                    {roles.map(role => (
                      <SelectItem key={role} value={role}>{role}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="skill-select" className="block text-sm font-medium text-gray-700 mb-1">Skill Category</label>
                <Select onValueChange={(value: SkillCategory | 'All') => setSelectedSkill(value)} defaultValue="All">
                  <SelectTrigger id="skill-select">
                    <SelectValue placeholder="Select a skill" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Skills</SelectItem>
                    {skillCategories.map(skill => (
                      <SelectItem key={skill} value={skill}>{skill}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>The STAR Method</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p><strong>S - Situation:</strong> Set the scene and give necessary details of your example.</p>
              <p><strong>T - Task:</strong> Describe what your responsibility was in that situation.</p>
              <p><strong>A - Action:</strong> Explain exactly what steps you took to address it.</p>
              <p><strong>R - Result:</strong> Share what outcomes your actions achieved.</p>
              <p className="mt-2 text-xs text-muted-foreground">Keep answers to 1-2 minutes and focus on YOUR impact.</p>
            </CardContent>
          </Card>
        </div>

        {/* Question and Practice Area */}
        <div className="md:col-span-2 space-y-8">
          <Button onClick={generateRandomQuestion} className="w-full text-lg font-bold py-6">
            Generate Random Question
          </Button>

          {currentQuestion ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{currentQuestion.question}</CardTitle>
                <div className="text-sm text-muted-foreground pt-2">
                  <span>Role: {currentQuestion.roles.join(', ')}</span> | <span>Category: {currentQuestion.category}</span>
                </div>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="S - Situation...\nT - Task...\nA - Action...\nR - Result..."
                  rows={10}
                  className="mt-2"
                />
                <div className="mt-4 text-sm text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Use specific examples from your experience.</li>
                    <li>Include numbers or quantifiable results where possible.</li>
                    <li>End with what you learned from the experience.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="text-center py-16 text-muted-foreground">
              <p>Click the button above to get a random behavioral question.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
