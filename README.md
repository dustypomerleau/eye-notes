Welcome to **eye-notes**! If you just want a copy of the notes, use the `Clone or download` button to download a zip file.

The notes are updated periodically. The easiest way to ensure you're seeing the latest version is to view them here on GitHub (desktop or mobile).

You can help keep everyone else up to date by sharing a link to this GitHub repository (rather than directly sharing the files).
  
  
### What is this?

A combination of ego and old-school thinking tends to make doctors believe that we should keep everything in our heads, despite an exponentially increasing quantity of information. That's absurd. Other fields don't try to do this. Having information at your fingertips while you work should be a way of life, not a sign of weakness. So here are some **eye-notes**. I hope they help you.

If you know nothing about ophthalmology, this probably isn't the place to start. If you have never seen a picture of the disease, or a patient with the disease, you'll be asking yourself to memorize a host of meaningless words. Don't do that. Take your time with the basics. We'll still be here when you come back.
  
  
### Why are you using GitHub to share ophthalmology notes?

Even with the help of cloud hosting services, shared medical notes are a trainwreck. The files quickly become out of date, then become disorganized. The folder membership moves on, and no new members move in. The next generation starts the process from scratch. If they're lucky they inherit the old pile of information, but it's almost as much work to tune it up as it would be to write the notes anew with current information. The sheer volume of *stuff* in these shared folders makes it hard to share without inviting people to a new shared folder, and so on. The disorganized nature of the *stuff* means that only a small percentage of the available knowledge gets passed on, and the 'members only' culture of shared folders means that only a few people benefit from that knowledge. One nice solution would be to build a website that could host the files and also provide a forum for discussion. Fortunately for us, GitHub has already built such a website :)

GitHub is optimized for what programmers call 'version control.' Version control makes it easy for me to push changes to the master version of the notes whenever I want, and for others to pull those changes into their copy of the notes. It allows others to easily create parallel/alternate versions for their own use, and it provides a system that prevents collaborators from stepping on others' changes. If you want to learn more about version control with Git, I strongly recommend [Pro Git][].
  
  
### Why are you using plain text files instead of Word documents or PDFs?

Text files are tiny. This entire repository is currently under 5 MB. Text files are easily indexed, which means you won't have any trouble searching within the files for a given keyword. We all love our formatting (and hate everyone else's formatting), but ultimately it ends up being a distraction. Text files keep you focused on content. They also work great with Git's version control. If you want to perform version control on binary blobs like Microsoft Word files, you have to keep a new copy of the file every time you modify it. This quickly gets out of hand. If you need to search or modify the files, using plain text gives you access to powerful text editors (see below).
  
  
### How should I view the files?

The beauty of plain text is that you can open it anywhere (even in your web browser). Having said that, if you use Microsoft Notepad to view the files, you probably won't fall in love with plain text. As mentioned above, if you just want to read the notes, use the GitHub site (desktop or mobile). The desktop version of GitHub has a `search this repository` field at the top, which you can use to find keywords across all documents.

If you really want to see the power of text files, you should download a decent text editor. A text editor will let you store all the files in an organized project, enabling you to perform actions (edit, search, find and replace) across all of the files at the same time. [Atom][] is an excellent free text editor. I use [Sublime Text][], which is also great (but not free).

Pay attention to the level of indentation when reading the notes. Indented items provide more information about the item they follow, with the main list continuing further down. The outline may have several levels of indentation.

  
### How do I know when you've pushed an update?

If you want to be notified whenever I push changes, create a GitHub account and `Watch` the repository. Your preferences will determine what type of notifications you receive.
  
  
### I disagree with something in your notes. Will you change it?

Maybe. If you think I've gotten something wrong, you should create a GitHub account and post your concern as an [issue][]. Posting an issue ensures that everyone tracking the repository can follow and participate in the discussion. When you post your issue, provide PubMed links to the references that support your point. In ophthalmology, differences of opinion are the *rule*, not the exception. If you submit an issue that amounts to: 'my unsubstantiated opinion is better than your unsubstantiated opinion,' it will be ignored. Name-dropping `${highlyRespectedOphthalmologist}` does not change the rules.
  
  
### I don't understand your abbreviations.

Check out [`abbreviations.txt`][] for an explanation.
  
  
### What do the ALL-CAPS keywords mean?

* **COMMON:** A *relatively* common diagnosis/treatment compared to others.  
* **ALSO:** Not as commmon as COMMON, but still worth considering.  
* **RARELY:** A very unlikely diagnosis, or an extremely uncommon treatment.  
* **ALWAYS:** Nothing is absolute, but it's clearer than ALMOST-ALWAYS.  
* **NEVER:** Nothing is absolute, but it's clearer than ALMOST-NEVER.  
* **BROADLY:** Used to indicate an umbrella term without listing every member.  
* **NOTE:** Used to highlight an exception, pitfall, or pearl.  
    
  
### What do the forward-slashes mean?

// This is a comment. Think of it like a side note.  

/*  
This  
is a  
multi-line  
comment.  
*/  

//... This is something unfinished that I may come back to.  

... This means there are more examples than I've listed.  
  
  
### What is 4IVN-2DC-GETN?

I've tried a lot of *universal differential diagnosis* mnemonics over the years. When I use mnemonics like VINDICATE, I always miss potential diagnoses because the categories are too broad. In order to avoid that pitfall in these notes, I created a universal differential that met my needs. I pronounce it 'For Ivan to D.C. gettin,' which is silly, but sticks in my head. Differentials in **eye-notes** are always presented in this order, regardless of how many categories are represented. The categories in the template can be found in [`DDx-template-4IVN2DCGETN.txt`][].

[`abbreviations.txt`]: https://github.com/dustypomerleau/eye-notes/blob/master/abbreviations.txt
[Atom]: https://atom.io/
[`DDx-template-4IVN2DCGETN.txt`]: https://github.com/dustypomerleau/eye-notes/blob/master/DDx-template-4IVN2DCGETN.txt
[issue]: https://github.com/dustypomerleau/eye-notes/issues
[Pro Git]: https://www.amazon.com/Pro-Git-Scott-Chacon-ebook/dp/B00LPDVAX2/ref=sr_1_1_twi_kin_2?ie=UTF8&qid=1476669956&sr=8-1&keywords=pro+git
[Sublime Text]: http://www.sublimetext.com/
