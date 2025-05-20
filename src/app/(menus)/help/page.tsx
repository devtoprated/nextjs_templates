"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  HelpCircle,
  CreditCard,
  Settings,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  UserCircle,
  FolderOpen,
  MessageCircle,
  Calendar,
  FileText,
} from "lucide-react";

const helpContent = {
  account: {
    id: "account",
    title: "Account",
    introduction: "Manage your account settings and access.",
    questions: [
      {
        question: "How can I reset my password?",
        answer: `<div><b>Prior to Logging in:</b><ol><li>1. Password Reset - If you have forgotten your password simply look at the bottom of the login page and click on the forgotten password link to reset your password.</li><li>2. Follow the steps to reset password</li></ol><br/><b>Once Logged in:</b><ol><li>1. Go to the upper right-hand corner where you see your username and click on <b>Update Profile</b></li><li>2. On the left-hand side click on <b>Security</b></li><li>3. Follow the steps to reset password</li></ol></div>`,
        videoUrl: "",
      },
      {
        question: "How can I edit my user profile?",
        answer: `<div><ol><li>1. Go to the upper right-hand corner where you see your username and click on <b>Update Profile</b></li><li>2. Modify any of the information you wish to update</li><li>3. Scroll to the bottom and click the <b>Update Account</b> button</li></ol></div>`,
        videoUrl: "",
      },
    ],
  },
  projects: {
    id: "projects",
    title: "Projects",
    introduction: "Learn about creating and managing projects.",
    questions: [
      {
        question: "What is a project?",
        answer: `<div>${"A simple way to understand a project is to think of a project as a <b>transaction</b>. It is a centralized hub for all transactional members to efficiently communicate, sign, share, and store documentation, analyze property listings, stay on top of important events and tasks, and much more!"}</div>`,
        videoUrl: "",
      },
      {
        question: "How do I create a project?",
        answer: `<div><ol><li>1. On the main navigation bar click on <b>Projects</b></li><li>2. Once on the Project page, on the left-hand side, locate and click the purple <b>Add Project</b> button to begin creating a project</li><li>3. Enter all the transaction specific information, then click <b>Create Project</b></li></ol></div>`,
        videoUrl: "",
      },
      {
        question: "How do I add members to a project?",
        answer: `<div><ol><li>1. While in a specific project, select the <b>Members</b> tab</li><li>2. Click on the <b>Add Member</b> button in the upper right-hand corner</li><li>3. Enter their email address, the user's role within the transaction, and hit <b>Add</b></li><li>4. Once you go back to the member page and view your list of members you will see a Pending status until they accept the invite to join the project</li></ol><br/><b>Note</b> - Only the Creator of a project can add and remove members from them.</div>`,
        videoUrl: "",
      },
      {
        question: "How do I add properties to a project?",
        answer: `<div><b>Option 1:</b><ol><li>1. Once in a project, click on the <b>Explore Listings</b> button</li><li>2. Locate a property that you wish to add to your project</li><li>3. Once you are on the property details page, locate and click on the <b>Add To Project</b> button</li><li>4. Select the project you want to add the property to your project</li></ol><br/><b>Note</b> - The ability to add properties to your <b>Favorite</b> and <b>Under Contract</b> sections also exist on the property details page.</div>`,
        videoUrl: "",
      },
      {
        question:
          "Can invited members of a project add properties to it as well?",
        answer: `<div>Yes. We highly encourage collaboration. However, this permission is controlled by the Creator and Clients (Buyer, Seller, Renter) of the project.</div>`,
        videoUrl: "",
      },
    ],
  },
  messages: {
    id: "messages",
    title: "Messages",
    introduction: "Communication features and messaging capabilities.",
    questions: [
      {
        question:
          "Does Goby Homes support group messaging since I have more than one member in my project?",
        answer: `<div>Yes, absolutely! To start a group message, simply select all of the members you want to message, give your newly created group a group name, and begin composing your message.</div>`,
        videoUrl: "",
      },
    ],
  },
  calendar: {
    id: "calendar",
    title: "Calendar",
    introduction: "Calendar management and event scheduling.",
    questions: [
      {
        question: "How do I add an event to my calendar?",
        answer: `<div><ol><li>1. Once on the Calendar page, click on the <b>Add Event</b> button in the upper right-hand corner</li><li>2. Enter event-specific information</li><li>3. Click on <b>Create Event</b></li></ol></div>`,
        videoUrl: "",
      },
      {
        question: "How do I sync my Goby Homes calendar to my Google calendar?",
        answer: `<div><ol><li>1. Once on the Calendar page, click on the <b>Add Event</b> button in the upper right-hand corner</li><li>2. Click on the <b>Sign In with Google</b> button at the top of the page</li><li>3. Select the Gmail account you want to sync with and sign in</li><li>4. Once successfully synced, the <b>Sign in</b> button will turn into <b>Sign Out from Google</b> to disable your account when ready</li></ol></div>`,
        videoUrl: "",
      },
    ],
  },
  documents: {
    id: "documents",
    title: "Documents",
    introduction: "Document management and file handling.",
    questions: [
      {
        question: "What is a Folder?",
        answer: `<div>A folder provides a secure and organized space to store forms and documentation that you may need across multiple transactions. This is especially useful for commonly used items, such as state-required forms, ensuring quick access and consistency throughout your processes.</div>`,
        videoUrl: "",
      },
      {
        question: "What is an imported document?",
        answer: `<div>An imported document is a document that comes directly from one of your folders and is saved to your dashboard.</div>`,
        videoUrl: "",
      },
      {
        question: "Can I merge multiple documents into one file package?",
        answer: `<div>Yes. When importing documents do the following:<ol><li>1. Select the files you would like to merge</li><li>2. Give them a new package name</li><li>3. Click save in the lower right-hand corner</li><li>4. All files will be saved to your dashboard</li></ol></div>`,
        videoUrl: "",
      },
      {
        question: "How can I upload and download documents?",
        answer: `<div><b>To upload:</b><ol><li>1. Go to the upper right-hand corner where you see your username and click on Projects</li><li>2. Once on the Project page, select the Documents tab</li><li>3. Click on the Upload button in the upper right-hand corner</li><li>4. Drag and drop or browse files to select the file you want to upload</li><li>5. Select Download</li><li>6. Once the download is complete you will see the file appear in the document section</li></ol><br/><b>To download:</b> Click on the three dots and select Download.</div>`,
        videoUrl: "",
      },
    ],
  },
};

export default function HelpPage() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([]);

  const toggleTopic = (topicId: string) => {
    setExpandedTopic(expandedTopic === topicId ? null : topicId);
  };

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
    );
  };

  const getTopicIcon = (topicId: string) => {
    switch (topicId) {
      case "account":
        return <UserCircle className="h-6 w-6" />;
      case "projects":
        return <FolderOpen className="h-6 w-6" />;
      case "messages":
        return <MessageCircle className="h-6 w-6" />;
      case "calendar":
        return <Calendar className="h-6 w-6" />;
      case "documents":
        return <FileText className="h-6 w-6" />;
      default:
        return <HelpCircle className="h-6 w-6" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen flex flex-col items-center mt-16">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl text-black font-bold mb-4 text-center">
          Help Center
        </h1>
        <p className="text-center mb-8 text-muted-foreground md:px-36">
          Welcome to Goby Homes Help Center. Find answers to your questions or
          contact our support team.
        </p>

        <div className="w-full space-y-4">
          {Object.entries(helpContent).map(([topicId, content]) => (
            <Card key={topicId} className="w-full">
              <CardHeader>
                <CardTitle
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleTopic(topicId)}
                >
                  <div className="flex items-center gap-4">
                    {getTopicIcon(topicId)}
                    <span>{content.title}</span>
                  </div>
                  {expandedTopic === topicId ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </CardTitle>
              </CardHeader>

              {expandedTopic === topicId && (
                <CardContent className="pt-2">
                  <p className="mb-6 text-muted-foreground">
                    {content.introduction}
                  </p>
                  <div className="space-y-4">
                    {content.questions.map((question, questionIndex) => {
                      const questionId = `${topicId}-${questionIndex}`;
                      return (
                        <div key={questionId} className="border rounded-lg p-4">
                          <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleQuestion(questionId)}
                          >
                            <h4 className="font-semibold text-lg">
                              {question.question}
                            </h4>
                            {expandedQuestions.includes(questionId) ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </div>
                          {expandedQuestions.includes(questionId) && (
                            <div className="mt-2">
                              <div
                                className="text-muted-foreground whitespace-pre-line py-2 pl-4"
                                dangerouslySetInnerHTML={{
                                  __html: question.answer,
                                }}
                              />
                              <style>{`
                              b {
                                color: #222;
                              }
                              ol { 
                                list-style-type: decimal;
                                padding-left: 1.5rem;
                              }
                              li {
                                margin-top: 0.3rem;
                                margin-bottom: 0.3rem;
                                }
                              `}</style>
                              {question.videoUrl && (
                                <div className="aspect-w-16 aspect-h-9 mt-4">
                                  <video controls className="w-full rounded-md">
                                    <source
                                      src={question.videoUrl}
                                      type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                  </video>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* contact us */}
        <div className="mt-12 w-full py-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-black">Contact Us</h2>
          <p className="text-muted-foreground">
            If you want to report a problem or have an additional question,
            please feel free to reach out to us{" "}
            <a
              href="/contact-us"
              className="text-primary hover:underline font-medium"
            >
              Contact Us
            </a>
            , and we will get back to you as soon as possible. Thank you!
          </p>
        </div>
      </div>
    </div>
  );
}
