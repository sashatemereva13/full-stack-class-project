#### In which file are the <html> and <body> tags?

it's in the app/layout.tsx

#### Which file renders the page at /?

the app/page.tsx

#### Which folder is for images and other static files, and how do you reference them?

public/

#### What is tsconfig.json doing in your project?

details the typescript compiler dev dependency

#### What does @/\* mean in tsconfig.json? Write an import that uses it.

it's an import alias for the project root. lets to avoid long relative paths.
import {getMovies} from "@/lib/movies"

#### What does app/layout.tsx import from next/font/google, and what does Next.js do with it at build time?

Geist, Geist_Mono.
uses them to load the fonts.
at build time, nextJS downloads and hosts fonts so no need to fetch from google.

#### What’s the difference between layout.tsx and page.tsx?

page.tsx defines the content for a specific route like /.
layout.tsx wraps pages in its folder and its subfolders.

#### Where would you put a navbar that appears on every page?

in layout.tsc since the root layout wraps every page.

#### What is globals.css for, and where is it imported?

contains global styles accross the app. it's imported in layout.tsx.

#### What is AGENTS.md, and does your app need it to run?

gives Ai conding agents guidance about the project.
