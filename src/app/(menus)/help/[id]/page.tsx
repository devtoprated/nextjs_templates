"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
// import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Question = {
  question: string;
  answer: string;
  videoUrl: string;
};

type Section = {
  title: string;
  questions: Question[];
};

type TopicContent = {
  id: string;
  title: string;
  introduction: string;
  sections: Section[];
};

const topicContent: TopicContent = {
  id: "getting-started",
  title: "Getting Started",
  introduction:
    "Welcome to our platform! This guide will help you get started with the basic features and functionalities.",
  sections: [
    {
      title: "Account Creation",
      questions: [
        {
          question: "How do I create an account?",
          answer:
            'To create an account, click on the "Sign Up" button in the top right corner of the homepage. Fill in your details and follow the prompts to complete the registration process.',
          videoUrl: "https://www.example.com/videos/create-account.mp4",
        },
        {
          question: "What information do I need to provide?",
          answer: `You'll need to provide a valid email address, create a password, and enter some basic personal information such as your name and date of birth.`,
          videoUrl: "https://www.example.com/videos/account-info.mp4",
        },
      ],
    },
    {
      title: "Navigation",
      questions: [
        {
          question: "How do I navigate the platform?",
          answer:
            "Our platform has a user-friendly interface with a navigation menu at the top of the page. You can access different sections by clicking on the menu items.",
          videoUrl: "https://www.example.com/videos/navigation.mp4",
        },
      ],
    },
  ],
};

export default function TopicDetailPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([]);

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionTitle)
        ? prev.filter((title) => title !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{topicContent.title}</h1>
      <p className="mb-8 text-muted-foreground">{topicContent.introduction}</p>

      {topicContent.sections.map((section, sectionIndex) => (
        <Card key={section.title} className="mb-6">
          <CardHeader>
            <CardTitle
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection(section.title)}
            >
              <span>{section.title}</span>
              {expandedSections.includes(section.title) ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </CardTitle>
          </CardHeader>
          {expandedSections.includes(section.title) && (
            <CardContent>
              {section.questions.map((question, questionIndex) => {
                const questionId = `${sectionIndex}-${questionIndex}`;
                return (
                  <div key={questionId} className="mb-4">
                    <h3
                      className="text-lg font-semibold mb-2 cursor-pointer flex justify-between items-center"
                      onClick={() => toggleQuestion(questionId)}
                    >
                      {question.question}
                      {expandedQuestions.includes(questionId) ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </h3>
                    {expandedQuestions.includes(questionId) && (
                      <>
                        <p className="mb-4">{question.answer}</p>
                        <div className="aspect-w-16 aspect-h-9 mb-4">
                          <video
                            controls
                            className="w-full h-full object-cover rounded-md"
                          >
                            <source src={question.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </CardContent>
          )}
        </Card>
      ))}

      {/* <Button className="mt-8">Back to Help Center</Button> */}
    </div>
  );
}
