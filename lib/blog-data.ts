"use client";

export const blogPosts = [
  {
    title: "Building Responsive UIs with Tailwind CSS",
    slug: "building-responsive-uis-with-tailwind-css",
    excerpt:
      "Learn how to create beautiful, responsive user interfaces using Tailwind CSS, a utility-first CSS framework that makes development faster and more intuitive.",
    date: "May 15, 2023",
    coverImage: "https://placehold.co/800x600/e2e8f0/1e293b?text=Tailwind+CSS",
    categories: ["Frontend", "CSS", "Design"],
    readTime: 8,
    author: {
      name: "Shubh Shubhankar",
      avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=S",
      role: "Full Stack Developer",
    },
    emoji: "🎨",
    content: `
      <h2>Introduction to Tailwind CSS</h2>
      <p>Tailwind CSS has revolutionized the way developers approach styling in web applications. Unlike traditional CSS frameworks that provide pre-designed components, Tailwind offers low-level utility classes that let you build completely custom designs without ever leaving your HTML.</p>
      
      <h3>Why Choose Tailwind CSS?</h3>
      <p>There are several compelling reasons to choose Tailwind for your next project:</p>
      <ul>
        <li>No more naming CSS classes</li>
        <li>Consistent spacing, sizing, and color systems</li>
        <li>Responsive design made simple</li>
        <li>Dark mode support out of the box</li>
        <li>Highly customizable</li>
      </ul>
      
      <h3>Building Responsive Layouts</h3>
      <p>Tailwind makes responsive design intuitive with its mobile-first breakpoint system. Here's an example of a responsive grid layout:</p>
      <pre><code>&lt;div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"&gt;
  &lt;div class="bg-white p-4 rounded shadow"&gt;Card 1&lt;/div&gt;
  &lt;div class="bg-white p-4 rounded shadow"&gt;Card 2&lt;/div&gt;
  &lt;div class="bg-white p-4 rounded shadow"&gt;Card 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
      
      <h3>Conclusion</h3>
      <p>Tailwind CSS offers a powerful, flexible approach to styling that can significantly speed up your development workflow. By embracing utility classes, you can create custom, responsive designs without the overhead of traditional CSS methodologies.</p>
    `,
  },
  {
    title: "Server Components in Next.js: A Game Changer",
    slug: "server-components-in-nextjs",
    excerpt:
      "Explore how React Server Components in Next.js are changing the way we build web applications, offering improved performance and developer experience.",
    date: "June 3, 2023",
    coverImage: "https://placehold.co/800x600/e2e8f0/1e293b?text=Next.js",
    categories: ["Next.js", "React", "Performance"],
    readTime: 10,
    author: {
      name: "Shubh Shubhankar",
      avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=S",
      role: "Full Stack Developer",
    },
    emoji: "⚡",
    content: `
      <h2>Understanding React Server Components</h2>
      <p>React Server Components represent a paradigm shift in how we build React applications. They allow components to render on the server, reducing the JavaScript sent to the client and improving performance.</p>
      
      <h3>The Problem with Traditional React</h3>
      <p>Traditional React applications face several challenges:</p>
      <ul>
        <li>Large JavaScript bundles that slow down initial load times</li>
        <li>Duplicate code between server and client</li>
        <li>Complex data fetching patterns</li>
      </ul>
      
      <p>Server Components address these issues by allowing components to run exclusively on the server, sending only the rendered HTML to the client.</p>
      
      <h3>Server Components in Next.js</h3>
      <p>Next.js has integrated Server Components as a core feature in the App Router. By default, all components in the App directory are Server Components unless specified otherwise.</p>
      
      <pre><code>// app/page.tsx
// This is a Server Component by default
export default async function Page() {
  // You can use async/await directly
  const data = await fetchData()
  
  return (
    &lt;main&gt;
      &lt;h1&gt;{data.title}&lt;/h1&gt;
      &lt;p&gt;{data.description}&lt;/p&gt;
    &lt;/main&gt;
  )
}</code></pre>
      
      <h3>Benefits of Server Components</h3>
      <p>Using Server Components provides several advantages:</p>
      <ol>
        <li><strong>Reduced Client-Side JavaScript</strong>: Server Components don't send component code to the client</li>
        <li><strong>Direct Backend Access</strong>: You can query databases and access backend resources directly</li>
        <li><strong>Improved Loading Performance</strong>: Initial page load is faster with less JavaScript</li>
        <li><strong>Automatic Code Splitting</strong>: Client components are automatically code-split</li>
      </ol>
    `,
  },
  {
    title: "Creating Custom Hooks in React",
    slug: "creating-custom-hooks-in-react",
    excerpt:
      "Learn how to build reusable custom hooks in React to share logic across components and make your code more maintainable.",
    date: "July 12, 2023",
    coverImage: "https://placehold.co/800x600/e2e8f0/1e293b?text=React+Hooks",
    categories: ["React", "JavaScript", "Frontend"],
    readTime: 7,
    author: {
      name: "Shubh Shubhankar",
      avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=S",
      role: "Full Stack Developer",
    },
    emoji: "🪝",
    content: `
      <h2>The Power of Custom Hooks</h2>
      <p>Custom hooks are one of React's most powerful features, allowing you to extract component logic into reusable functions. They follow the same rules as React's built-in hooks and always start with the word "use".</p>
      
      <h3>Why Use Custom Hooks?</h3>
      <p>Custom hooks offer several benefits:</p>
      <ul>
        <li>Reuse stateful logic between components</li>
        <li>Keep components clean and focused on UI</li>
        <li>Test logic independently from components</li>
        <li>Create a library of reusable functionality</li>
      </ul>
      
      <h3>Building Your First Custom Hook</h3>
      <p>Let's create a simple custom hook for managing form input:</p>
      
      <pre><code>// hooks/useInput.js
import { useState } from 'react';

function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  const reset = () => {
    setValue(initialValue);
  };
  
  return {
    value,
    onChange: handleChange,
    reset,
  };
}</code></pre>
      
      <p>Now you can use this hook in any component that needs form input:</p>
      
      <pre><code>function LoginForm() {
  const email = useInput('');
  const password = useInput('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email.value);
    console.log('Password:', password.value);
    email.reset();
    password.reset();
  };
  
  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input 
        type="email" 
        placeholder="Email" 
        {...email} 
      /&gt;
      &lt;input 
        type="password" 
        placeholder="Password" 
        {...password} 
      /&gt;
      &lt;button type="submit"&gt;Login&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>
    `,
  },
  {
    title: "Optimizing MongoDB for Production",
    slug: "optimizing-mongodb-for-production",
    excerpt:
      "Discover essential strategies for optimizing MongoDB performance in production environments, from indexing to sharding and everything in between.",
    date: "August 5, 2023",
    coverImage: "https://placehold.co/800x600/e2e8f0/1e293b?text=MongoDB",
    categories: ["MongoDB", "Database", "Backend", "Performance"],
    readTime: 12,
    author: {
      name: "Shubh Shubhankar",
      avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=S",
      role: "Full Stack Developer",
    },
    emoji: "🚀",
    content: `
      <h2>MongoDB Performance Optimization</h2>
      <p>MongoDB is a powerful NoSQL database, but like any database system, it requires proper optimization to perform well in production environments. This article covers essential strategies to ensure your MongoDB deployment runs efficiently at scale.</p>
      
      <h3>Indexing Strategies</h3>
      <p>Proper indexing is the foundation of MongoDB performance. Without indexes, MongoDB must scan every document in a collection to find matches to a query.</p>
      
      <h4>Creating Effective Indexes</h4>
      <p>Here are some indexing best practices:</p>
      <ul>
        <li>Create indexes to support your queries</li>
        <li>Use compound indexes for queries with multiple fields</li>
        <li>Consider the order of fields in compound indexes</li>
        <li>Use covered queries when possible</li>
      </ul>
      
      <pre><code>// Create a simple index
db.users.createIndex({ email: 1 })

// Create a compound index
db.orders.createIndex({ userId: 1, createdAt: -1 })</code></pre>
      
      <h3>Monitoring and Profiling</h3>
      <p>Set up comprehensive monitoring to identify performance issues:</p>
      <ul>
        <li>Use MongoDB Atlas monitoring or tools like Prometheus and Grafana</li>
        <li>Enable the database profiler to capture slow queries</li>
        <li>Set up alerts for key metrics like high CPU usage, slow queries, and connection saturation</li>
      </ul>
    `,
  },
  {
    title: "Building a CI/CD Pipeline with GitHub Actions",
    slug: "building-cicd-pipeline-with-github-actions",
    excerpt:
      "Learn how to set up a complete CI/CD pipeline using GitHub Actions to automate testing, building, and deploying your applications.",
    date: "September 18, 2023",
    coverImage: "https://placehold.co/800x600/e2e8f0/1e293b?text=CI/CD",
    categories: ["DevOps", "CI/CD", "GitHub", "Automation"],
    readTime: 9,
    author: {
      name: "Shubh Shubhankar",
      avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=S",
      role: "Full Stack Developer",
    },
    emoji: "🔄",
    content: `
      <h2>Automating Your Development Workflow</h2>
      <p>Continuous Integration and Continuous Deployment (CI/CD) has become an essential practice in modern software development. GitHub Actions provides a powerful and flexible way to automate your development workflow directly from your GitHub repository.</p>
      
      <h3>Understanding GitHub Actions</h3>
      <p>GitHub Actions uses a simple YAML syntax to define workflows. Each workflow consists of one or more jobs that can run sequentially or in parallel. Jobs contain a series of steps that execute commands or actions.</p>
      
      <h4>Key Concepts</h4>
      <ul>
        <li><strong>Workflows</strong>: Automated procedures defined in YAML files</li>
        <li><strong>Events</strong>: Triggers that start a workflow (e.g., push, pull request)</li>
        <li><strong>Jobs</strong>: Sets of steps that execute on the same runner</li>
        <li><strong>Actions</strong>: Reusable units of code that can be shared</li>
        <li><strong>Runners</strong>: Servers that run your workflows</li>
      </ul>
      
      <h3>Setting Up a Basic CI Workflow</h3>
      <p>Let's start by creating a basic CI workflow for a Node.js application. Create a file at <code>.github/workflows/ci.yml</code>:</p>
      
      <pre><code>name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '16'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linter
      run: npm run lint
    
    - name: Run tests
      run: npm test</code></pre>
    `,
  },
  {
    title: "Mastering TypeScript: Advanced Types and Patterns",
    slug: "mastering-typescript-advanced-types-and-patterns",
    excerpt:
      "Take your TypeScript skills to the next level with advanced type features, design patterns, and best practices for large-scale applications.",
    date: "October 10, 2023",
    coverImage: "https://placehold.co/800x600/e2e8f0/1e293b?text=TypeScript",
    categories: ["TypeScript", "JavaScript", "Frontend", "Programming"],
    readTime: 11,
    author: {
      name: "Shubh Shubhankar",
      avatar: "https://placehold.co/200x200/e2e8f0/1e293b?text=S",
      role: "Full Stack Developer",
    },
    emoji: "📘",
    content: `
      <h2>Advanced TypeScript Techniques</h2>
      <p>TypeScript has evolved into a powerful type system that goes far beyond simple type annotations. This article explores advanced TypeScript features that can help you build more robust, maintainable applications.</p>
      
      <h3>Utility Types</h3>
      <p>TypeScript provides several built-in utility types that help manipulate types in various ways:</p>
      
      <h4>Partial, Required, and Pick</h4>
      <pre><code>interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// Makes all properties optional
type PartialUser = Partial<User>;

// Makes all properties required
type RequiredUser = Required<User>;

// Creates a type with only the specified properties
type UserCredentials = Pick<User, 'email' | 'role'>;</code></pre>
      
      <h3>Conditional Types</h3>
      <p>Conditional types allow you to create types that depend on conditions:</p>
      
      <pre><code>type IsArray<T> = T extends any[] ? true : false;

// Usage
type CheckString = IsArray<string>;  // false
type CheckArray = IsArray<string[]>;  // true</code></pre>
      
      <h3>Conclusion</h3>
      <p>Mastering these advanced TypeScript features can significantly improve your code quality and developer experience. They enable you to create more precise types, catch more errors at compile time, and write more self-documenting code.</p>
    `,
  },
];
