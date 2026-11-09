## Lab 1

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

## Lab 2

#### In the page source, are the movie titles present for /movies? For /movies-client? Why?

yes for /movies - it is rendered on the server so movie titles are included in HTML.
no for /movies-client - useEffect fetches the movie data in the browser after the page loads.

#### Without the force-dynamic line of Part E, you run npm run build again tomorrow, then npm start, without changing anything else. What does the "Rendered at" timestamp of /movies show, and why?

it shows the time of the tomorrow's build.
without force-dynamic, /movies is prerendered during npm run build so npm start serves that HTML and timestamp. each new build = new timestamp.

#### Part E made every request to /movies about one second slower. Give one situation where force-dynamic is still the right choice, and explain why.

when the page absolutely must show fresh, request-specific data, such as banking app showing current account balance.

#### A classmate sees [movies] rendered 6 movies in the browser console and says: "So this code runs in the browser." What do you answer, and how can you prove it?

that log isn't a total proof.
in development, nextJS may show a copy of Server Component logs in the browser console for debugging.
it's possible to check the terminal running npm run dev, where the server prints the message.
alternatively, we could disable JS and reload /movies - if a movie list is visible then it was rendered on the sever.

#### Which version would you choose for a public movie catalogue that changes once a week, and why?

perhaps, a statically rendered /movies page would be my preference.
a weekly catalog wouldn't need fresh data on eeeevery request.... so rebuilding after updates serves fast pages without making each visitor wait for the one-second fetch.
