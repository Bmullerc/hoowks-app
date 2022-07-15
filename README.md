# Hoowks, a Personal Learning Project

## The idea
My idea was to study React Hooks by creating a mock teaching page. With that in mind, I had to research and compile information to be able to explain and create examples while also practicing a lot of other concepts, skills and tools.

### Disclaimer
This is all coming from a student, still grasping a lot of the concepts of front-end development. So, if anything is wrong or missing information, I will fix it. Also, this was heavily inspired by [W3Schools](https://www.w3schools.com/), [MDN](https://developer.mozilla.org/en-US/) and [React Official Docs](https://reactjs.org/docs/getting-started.html) and most of the information was taken from these sources.

### Result Preview

![MobileMenu](/MobileMenu.png)

![Mobile](/Mobile.png)

![Desktop](/Desktop.png)

### Live Site
[Hoowks](https://hoowks.netlify.app/)

## Built With

- React
- Vite
- TailwindCSS
- HeadlessUI
- Semantic HTML5
- Mobile-first workflow
- Accessibility focus

## My Process

- For this project I didn't start with a Figma design, I just designed it on the fly and changed things as I saw fit.
- This really started with a personal test project for a Navbar using Tailwind + Headless with Theme changing in mind, and I just decided to expand it from there since I liked how it looked.
- Decided to go with the "Hoowks" name because it combined How and Hooks. Cheesy, but it does the job.
- As I already had decided on the colors with the Navbar, I then just used the same "feel" in the whole project.
- Made the extravagant Header, with the Logo already in mind with a "?" in its place. Somewhat proud of the gradient into background look.
- Wrote the About and Disclaimer explaining the project.
- Went on to actually start on the content, first with a basic Intro and then going into each of the three basic Hooks.
- As I finished each Hooks, I tried to include self made examples.
- At some point, I had a lot of reused lines caused by Tailwind and little code snippets, which I then replace with a simple `<Code />` component.
- Did the same as above to the `<Pre />` formatted code and HOT TIP, replacing them with a `<PreCode />` and `<HotTip />` components.
- Added some Extra content and a Footer with my socials.
- Created and Added the Logo and Favicon.
- Added a TODO list for the future.
- Also always kept changing and improving on the layout, making adjustments to theme colors, margins, responsiveness and other details as I went.

### Process 2.0
- Tried to port to Typescript but failed to make everything work and rolled back.
- Preparing for future "Intermediate Hooks" and other Content.
- Added React Router and started playing around with page routing.
- Found a problem with the addition of Routes, the theme was reverting back to light (default) when loading/reloading pages.
- Fixed the theme problem with the use of LocalStorage.
- Changed the theme changing Icons to use LocalStorage aswell.
- Started working on consolidating the Hooks dropdowns into a single Content dropdown.

## Need to Improve

- Page loading/changing seems rough at times, not sure what can be done.
- Improve the Pages and Nav anchors related to them.
- Tried to port to Typescript but could not figure out some of the problems and couldn't make the app work because of them.
- Folder management

## Next Steps

- Need to learn more about testing. (I'll try to use Vitest on this app and let's hope I don't break it again)
- Need to learn Next.
