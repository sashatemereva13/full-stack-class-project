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

## Lab 3

#### NavLink uses usePathname, a hook that only works in Client Components. Yet the page source of /movies/2 already contains aria-current="true" on the Movies link. How is this possible?

NavLink is a Client Component (CC). NextJS can very well render CCs on the server for the initial page load, and only then hydrate them in the browser. During the render, the path name is /movies/2 indeed, so the link gets the aria current attribute in the HTML sent to the browser. Yes, the hook needs a CC but that doesn't imply that initial render only happens in the browser.

#### Why does generateStaticParams return String(movie.id) and not movie.id? And why does /movies/42 give a 404 in Part C without running the code of the page?

Route params come from URL segments, so the generateStaticParams returns strings. the is is the string and getMovie expects a string, so string(movie.id) gives the generated param the type it expects. while with dynamicParams = false, nextJS wants only IDs listed by the generateStaticParams soo "42" isn't listed and NextJS returns 404.

#### In Part D, why is the note kept between /movies and /movies/2, and lost when you go through /about?

if the layout stays mounted, the note survives navigation. layout.tsx in this case wraps both movies and movies/2, so the page beneath the layout changes but the input and state are preserved.

#### In Part E, step 4, where is the real message of the error, and why does Next.js not send it to the browser?

in prod, nextJS would hide the original error and send a generic one - that's toprevent sensitive data from leaking out.

#### Under npm run dev, "Loading the movies..." appears when you open /movies/2. Under npm start it does not, but it still appears on /movies. Why?

it depends on whether nextJS has to wait for server data. in development, /movies/2 runs the page's data lookup which waits a second. in prod, /movies/2 is pre-rendered from generateStaticParams, so the ready page can be served immediately. while /movies is force-dynamic, so its data lookup runs on each request even under npm start.
