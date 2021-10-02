import React, { useState } from "react";
import NewsItem from "./NewsItem";
import "./News.css";
import placeholder from "./placeholder.jpeg";

const myarticles = [
  {
    source: { id: "cnn", name: "CNN" },
    author: "Aya Elamroussi, CNN",
    title:
      "Covid-19 antiviral pill could be a game changer, but vaccines are still America's way out of the pandemic, experts say - CNN",
    description:
      'A pill that could potentially treat Covid-19 is a "game-changer," but experts are emphasizing that it\'s not an alternative to vaccinations -- which remain the most effective path to ending the coronavirus pandemic if enough people get their shots.',
    url: "https://www.cnn.com/2021/10/02/health/us-coronavirus-saturday/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/211001064813-merck-covid-pill-100121-super-tease.jpg",
    publishedAt: "2021-10-02T07:07:00Z",
    content:
      '(CNN)A pill that could potentially treat Covid-19 is a "game-changer," but experts are emphasizing that it\'s not an alternative to vaccinations -- which remain the most effective path to ending the c… [+5767 chars]',
  },
  {
    source: { id: null, name: "CBS Sports" },
    author: "Matt Snyder",
    title:
      "Yankees vs. Rays score: Yanks lose, fail to clinch playoff spot; Red Sox, Jays, Mariners still on their heels - CBS sports.com",
    description:
      "The Yankees failed to clinch a wild-card spot as they lost and things tightened up",
    url: "https://www.cbssports.com/mlb/news/yankees-vs-rays-score-yanks-lose-fail-to-clinch-playoff-spot-red-sox-jays-mariners-still-on-their-heels/live/",
    urlToImage:
      "https://sportshub.cbsistatic.com/i/r/2021/10/02/2f15c720-6e71-4a1c-90fa-434c840770b9/thumbnail/1200x675/54cb71f3dbb4f5f86b5a4cdc6deb4bc1/joey-gallo-new-york-yankees.jpg",
    publishedAt: "2021-10-02T05:23:25Z",
    content:
      "We're down to the nitty gritty here with only Saturday and Sunday action remaining in the regular season -- unless a one-game playoff is needed on Monday, which is definitely possible -- and the Amer… [+1882 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Joseph Wulfsohn",
    title:
      "Bill Maher defends Sinema, Manchin: Maybe they have 'their thumb more on the pulse on the average Democrat' - Fox News",
    description:
      '"Real Time" host Bill Maher on Friday defended maverick U.S. Sens. Kyrsten Sinema, D-Ariz., and Joe Manchin, D-W.Va., for not backing the Democrats\' multitrillion-dollar spending spree.',
    url: "https://www.foxnews.com/entertainment/bill-maher-kyrsten-sinema-joe-manchin",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2021/10/3waysplit-sinema-maher-manchin.jpg",
    publishedAt: "2021-10-02T04:40:21Z",
    content:
      '"Real Time" host Bill Maher on Friday defended maverick U.S. Sens. Kyrsten Sinema, D-Ariz., and Joe Manchin, D-W.Va., for not backing the Democrats\' multitrillion-dollar spending spree. \r\nMaher kicke… [+1637 chars]',
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "EXCLUSIVE by Zahra Ullah and Matthew Chance, CNN",
    title:
      "Belarusian strongman Alexander Lukashenko tries to turn the tables in combative interview - CNN",
    description:
      "In a rare and exclusive interview with CNN, Belarus leader Alexander Lukashenko was defiant when asked to address human rights abuses since he claimed election victory last year.",
    url: "https://www.cnn.com/2021/10/02/europe/belarus-lukashenko-interview/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/210930151028-alexander-lukashenko-amanpour-super-tease.jpg",
    publishedAt: "2021-10-02T04:00:00Z",
    content:
      "Minsk, Belarus (CNN)Alexander Lukashenko must be familiar by now with the sound of people who disagree with him. The Belarusian capital of Minsk was thronged with massive protests before and after th… [+6951 chars]",
  },
  {
    source: { id: null, name: "Vulture" },
    author: "Jennifer Zhan",
    title: "Original Van Halen Frontman David Lee Roth Is Retiring - Vulture",
    description: "“I’ll miss you all. Stay frosty.”",
    url: "http://www.vulture.com/2021/10/original-van-halen-frontman-david-lee-roth-is-retiring.html",
    urlToImage:
      "https://pyxis.nymag.com/v1/imgs/2be/a8e/b25918fd80ed7668083036799b310a6829-david-lee-roth.1x.rsocial.w1200.jpg",
    publishedAt: "2021-10-02T03:29:56Z",
    content:
      "David Lee Roth, the original lead singer of the rock band Van Halen, will conclude his career this January. Im throwing in the shoes. Im retiring, he told the Las Vegas Review-Journal over the phone … [+885 chars]",
  },
  {
    source: { id: "google-news", name: "Google News" },
    author: null,
    title:
      "Tampa domestic violence expert weighs in on police interaction with Petito, Laundrie in Utah - WFLA News Channel 8",
    description: null,
    url: "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9dzFnekZpbEdrOEHSAQA?oc=5",
    urlToImage: null,
    publishedAt: "2021-10-02T03:11:31Z",
    content: null,
  },
  {
    source: { id: "business-insider", name: "Business Insider" },
    author: "Erin Snodgrass, Joseph Zeballos-Roig, Charles Davis",
    title:
      "Biden social spending package: Compromises to save his economic plans - Business Insider",
    description:
      "Biden came down on the side of progressives who want to approve the social spending bill alongside an infrastructure package.",
    url: "https://www.businessinsider.com/biden-floats-2-trillion-social-spending-package-economic-plans-2021-10",
    urlToImage:
      "https://i.insider.com/615782880037100018433ecf?width=1200&format=jpeg",
    publishedAt: "2021-10-02T03:09:47Z",
    content:
      "President Joe Biden suggested a $2 trillion price tag for a social spending plan containing the bulk of his economic agenda, part of an effort to broker a compromise between the party's warring facti… [+3773 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Kevin Dotson, David Close and Steve Almasy, CNN",
    title:
      "NWSL commissioner resigns as league calls off weekend matches after accusations of sexual misconduct by fired coach - CNN",
    description:
      "The commissioner of the National Women's Soccer League has resigned and the league has called off all matches scheduled for this weekend following a report by The Athletic detailing allegations of sexual coercion and misconduct against Paul Riley, who coached…",
    url: "https://www.cnn.com/2021/10/01/football/nwsl-sexual-misconduct-allegations-spt-intl/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/211001160937-02-paul-riley-file-super-tease.jpg",
    publishedAt: "2021-10-02T03:09:00Z",
    content:
      "(CNN)The commissioner of the National Women's Soccer League has resigned and the league has called off all matches scheduled for this weekend following a report by The Athletic detailing allegations … [+5496 chars]",
  },
  {
    source: { id: null, name: "Alabama's News Leader" },
    author: "STEPHEN GROVES, Associated Press",
    title:
      "South Dakota Gov. Kristi Noem defends daughter's licensure - KOMO News",
    description:
      "SIOUX FALLS, S. D. (AP) &mdash; South Dakota Gov. Kristi Noem on Friday defended her administration's handling of her daughter's application for a real estate appraiser license, attempting to brush aside questions about a meeting she held last year that inclu…",
    url: "https://abc3340.com/news/nation-world/south-dakota-gov-kristi-noem-defends-daughters-licensure",
    urlToImage:
      "https://static-11.sinclairstoryline.com/resources/media/73973330-9da6-442f-a8b7-80dd2bc08116-large16x9_AP21273612694600.jpg?1633142518792",
    publishedAt: "2021-10-02T02:48:02Z",
    content: null,
  },
  {
    source: { id: null, name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Priti Patel urges police to rethink harassment strategy - BBC News",
    description:
      "The home secretary's call follows the murder of Sarah Everard by serving Met officer Wayne Couzens.",
    url: "https://www.bbc.com/news/uk-58770536",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/16148/production/_118104409_hi066172013.jpg",
    publishedAt: "2021-10-02T02:44:00Z",
    content:
      'By Kathryn SnowdonBBC News\r\nImage source, Getty Images\r\nImage caption, Priti Patel on harassment: "I want women to have the confidence to call it out"\r\nPolice must take harassment and flashing more s… [+4034 chars]',
  },
  {
    source: { id: null, name: "Yahoo Entertainment" },
    author: "Nate Day",
    title:
      "Dave Bautista shares pic of nose broken by Daniel Craig while filming 'Spectre' - Yahoo! Voices",
    description:
      '"Army of the Dead" star Dave Bautista shared an image of himself sporting a broken nose, which happened while filming a scene for the 2015 James Bond flick "...',
    url: "https://news.yahoo.com/dave-bautista-shares-pic-nose-002254150.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/griacLZyJgs7asFDCVQINw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzY-/https://s.yimg.com/uu/api/res/1.2/4H3NyT7sIt7gYiQcwM2Ikg--~B/aD03MjA7dz0xMjc5O2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/fox_news_text_979/6e2195e618351132916a3cd948c3ef79",
    publishedAt: "2021-10-02T02:29:17Z",
    content:
      "Dave Bautista is showing off his battle scars.\r\nThe actor, 52, took to Twitter earlier this week to share an image of himself with a broken nose.\r\nDespite his previous career being in the WWE, Bautis… [+2445 chars]",
  },
  {
    source: { id: null, name: "New York Times" },
    author: "Shawn Hubler",
    title:
      "California to Mandate Covid-19 Vaccines for All Students as Soon as Next Fall - The New York Times",
    description:
      "Children from kindergarten to 12th grade in both public and private schools will be required to be inoculated against the coronavirus once the F.D.A. gives full approval.",
    url: "https://www.nytimes.com/2021/10/01/us/california-covid-mandate-vaccine-students.html",
    urlToImage:
      "https://static01.nyt.com/images/2021/10/01/autossell/newsom_21/newsom_21-facebookJumbo.jpg",
    publishedAt: "2021-10-02T01:05:30Z",
    content:
      "The governor obviously just wants a headline, Mr. Kiley said. We had the worst school shutdowns, we had the worst business shutdowns, and now we have the highest level of coercion and control when it… [+3959 chars]",
  },
  {
    source: { id: null, name: "Daily Beast" },
    author: "Matt Lewis",
    title:
      "Corey Lewandowski Finally Went Too Far—He Messed With the Money - The Daily Beast",
    description:
      "Grabbing a reporter or refusing to pay child support can be overlooked in Trumpworld, but this was an unpardonable sin.",
    url: "https://www.thedailybeast.com/corey-lewandowski-finally-went-too-farhe-messed-with-the-money",
    urlToImage:
      "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1633136148/211001-Corey-Lewandowski-tease-01_iwdn2g",
    publishedAt: "2021-10-02T00:59:42Z",
    content:
      "Like bad breath, Corey Lewandowski keeps coming back, but he might have finally worn out his welcome in Trumpworld for good.\r\nAccording to allegations reported in Politico, the wife of a Republican d… [+5531 chars]",
  },
  {
    source: { id: null, name: "NBCSports.com" },
    author: "Mike Florio",
    title:
      "Urban Meyer: Fourth and goal play was designed to go to James Robinson - NBC Sports",
    description:
      "The Jaguars led the Bengals late in the first half, 14-0. Facing fourth and goal, they opted to go for a touchdown in lieu of a field goal. Either would have given Jacksonville a three-score lead. Coach Urban Meyer didn’t have much to say about the play after…",
    url: "https://profootballtalk.nbcsports.com/2021/10/01/urban-meyer-fourth-and-goal-play-was-designed-to-go-to-james-robinson/",
    urlToImage:
      "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2021/10/GettyImages-1344182615-e1633136259794.jpg",
    publishedAt: "2021-10-02T00:58:00Z",
    content:
      "The Jaguars led the Bengals late in the first half, 14-0. Facing fourth and goal, they opted to go for a touchdown in lieu of a field goal. Either would have given Jacksonville a three-score lead.\r\nC… [+1792 chars]",
  },
  {
    source: { id: null, name: "Minneapolis Star Tribune" },
    author: "AMY FORLITI, CARLA K. JOHNSON, Associated Press",
    title:
      "US hits 700000 COVID deaths just as cases begin to fall - Minneapolis Star Tribune",
    description:
      "The United States reached its latest heartbreaking pandemic milestone Friday, eclipsing 700,000 deaths from COVID-19 just as the surge from the delta variant is starting to slow down and give overwhelmed hospitals some relief.",
    url: "https://www.startribune.com/us-hits-700000-covid-deaths-just-as-cases-begin-to-fall/600102759/",
    urlToImage:
      "https://chorus.stimg.co/22894375/merlin_64082968.jpg?h=630&w=1200&fit=crop&bg=999&crop=faces",
    publishedAt: "2021-10-02T00:56:15Z",
    content:
      "MINNEAPOLIS The United States reached its latest heartbreaking pandemic milestone Friday, eclipsing 700,000 deaths from COVID-19 just as the surge from the delta variant is starting to slow down and … [+6423 chars]",
  },
  {
    source: { id: null, name: "NPR" },
    author: "",
    title: "Miya Marcano missing Florida college student - NPR",
    description:
      "Law enforcement agencies across Florida say they are also working around the clock regarding Marcano's disappearance. She was last seen on Sept. 24.",
    url: "https://www.npr.org/2021/10/01/1042593012/fbi-joins-search-missing-college-student-miya-marcano",
    urlToImage:
      "https://media.npr.org/assets/img/2021/10/01/MiyaMarcano_wide-49a747998e83862a0ab80ab97498c9f337cf0dd6.jpg?s=1400",
    publishedAt: "2021-10-02T00:43:45Z",
    content:
      "This photo provided by Orange County Sheriff's Office shows Miya Marcano in Orlando, Fla. The sheriff's office says she disappeared Friday shortly after 27-year-old maintenance worker Armando Caballe… [+2414 chars]",
  },
  {
    source: { id: null, name: "PEOPLE" },
    author: "Dan Heching",
    title:
      "NBC's Kristen Dahlgren Reveals Her Cancer Recovery 'Has Been Infinitely Harder' Than Treatment - Yahoo Entertainment",
    description:
      '"Cancer is not linear," wrote NBC correspondent Kristen Dahlgren of her road to recovery',
    url: "https://people.com/health/nbc-kristen-dahlgren-reveals-her-cancer-recovery-has-been-infinitely-harder-than-treatment/",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/hbevyDIY6cXE5rJ.jKYxSw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/uu/api/res/1.2/AQD1J_qn48UaozW5iSRhfQ--~B/aD0xMDAwO3c9MTUwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/people_218/2f244366c9c38ab958d66e67997fb0cf",
    publishedAt: "2021-10-01T23:43:51Z",
    content:
      "Nathan Congleton/NBC \r\nKristen Dahlgren is providing an update on her breast cancer journey at the start of October's Breast Cancer Awareness Month.\r\nThe NBC correspondent, 48, penned an essay for To… [+2375 chars]",
  },
  {
    source: { id: null, name: "CBS Sports" },
    author: "",
    title:
      "College football picks, schedule: Predictions against the spread, odds for top 25 games today in Week 5 - CBS Sports",
    description:
      "A closer look at the top games on the slate for Week 5 of the 2021 season",
    url: "https://www.cbssports.com/college-football/news/college-football-picks-schedule-predictions-against-the-spread-odds-for-top-25-games-today-in-week-5/",
    urlToImage:
      "https://sportshub.cbsistatic.com/i/r/2021/10/01/47421310-c861-48d3-9cb2-e3716014419b/thumbnail/1200x675/a8ecb3f0cde255304d8b8dc3e7039f01/sean-clifford-penn-state-getty.png",
    publishedAt: "2021-10-01T23:25:00Z",
    content:
      "Though this is only the fifth week of the 2021 college football season, plenty will be decided Saturday with multiple top-25 matchups on the slate and plenty of other ranked teams in action against t… [+5113 chars]",
  },
  {
    source: { id: null, name: "NPR" },
    author: null,
    title: "U.S. hits 700000 COVID deaths just as cases begin to fall - NPR",
    description:
      "Health experts say the latest wave of the pandemic has peaked. But an estimated 70 million eligible Americans remain unvaccinated and vulnerable to the highly contagious delta variant.",
    url: "https://www.npr.org/2021/10/01/1042592683/covid-cases-are-falling-but-the-u-s-is-on-the-brink-of-700-000-dead",
    urlToImage:
      "https://media.npr.org/assets/img/2021/10/01/ap21274655229905_wide-16df44d225d2cb343ee7f2e5e796f74f6c42a2b9.jpg?s=1400",
    publishedAt: "2021-10-01T23:23:29Z",
    content:
      "Nursing coordinator Beth Springer looks into a patient's room in a COVID-19 ward at the Willis-Knighton Medical Center in Shreveport, La., in August. Despite a decline in COVID-19 cases in the United… [+6935 chars]",
  },
  {
    source: { id: null, name: "Fox Business" },
    author: "Breck Dumas",
    title:
      "Coppertone recalls five sunscreen products found to contain benzene - Fox Business",
    description:
      "Coppertone has issued a voluntary recall on specific lots of several sunscreen sprays after finding they contained benzene, a chemical known to cause cancer.",
    url: "https://www.foxbusiness.com/retail/coppertone-recalls-five-sunscreen-products-found-to-contain-benzene",
    urlToImage:
      "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/10/0/0/CoppertoneProducts.jpg?ve=1&tl=1",
    publishedAt: "2021-10-01T22:52:44Z",
    content:
      "Coppertone, owned by German firm Beiersdorf, has issued a recall on five of its sunscreen sprays sold nationwide in the U.S. after known the carcinogen benzene was detected in several product batches… [+1437 chars]",
  },
];

function News() {
  const [articles, setarticles] = useState(myarticles);

  return (
    <>
      <h1 className="news-header">NewsMonkey. - Top Headlines</h1>
      <div className="row">
        {articles.map((element) => {
          const {
            title,
            description,
            urlToImage,
            url,
            author,
            publishedAt,
            source,
          } = element;
          return (
            <div className="news-width column" key={element.url}>
              <NewsItem
                title={title ? title.substring(0, 62) : "No Title"}
                description={
                  description ? description.substring(0, 150) : "No Description"
                }
                img={urlToImage ? urlToImage : placeholder}
                newsUrl={url}
                author={author ? author.substring(0, 25) : "Unknown"}
                publishedAt={publishedAt ? publishedAt : "Unknown"}
                batch={source.name}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default News;
