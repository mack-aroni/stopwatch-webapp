# stopwatch-webapp

Created for personal use as a mini-project and heavily based off of https://www.online-stopwatch.com/timer/

Utilizes Flask to take in and process an input from the URL (URL input used instead of interface because of personal preference)

JavaScript manages client-side buttons and updates displays

To use add to the end of the URL _(some num)_ **h** for hours, _(some num)_ **m** for minutes, and _(some num)_ **s** for seconds, spaces are not necessary, any incorrect usage will redirect to a 00:00:00 timer

Example: https://emac-stopwatch.vercel.app/1h60m120s will create a timer of 02:02:00

Vercel deployment link: https://emac-stopwatch.vercel.app
