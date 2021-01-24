import React from 'react';
import GalleryItem from '../gallery-item/gallery-item.component.jsx';
import { GalleryContainer } from './gallery.styles.jsx';

const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryItem
        gridArea={'一'}
        urlSrc='img/5yearparty.jpg'
        altSrc="Alan's 5 year Bethel Party"
        date='January 25, 2019'
        chapter='Chapter One'
        story={
          <>
            <p>
              Georgia: <br />
              This was a pretty awkward day for me. I had been asked to make a
              cake and write a song of congratulations to this boy in my hall I
              barely knew! I asked various times to confirm It wouldn’t give the
              wrong impression. Nevertheless, the party went smoothly and it
              allowed me and Alan to become friends
            </p>
            <p>
              Alan: <br />
              My friends in the congregation threw me a surprise 5 year Bethel
              anniversary party. I knew Georgia from the hall, but I didn’t
              realize how talented she was with cakes and music!… She definitely
              wrote me a song on purpose…
            </p>
          </>
        }
        transformOrigin='50% 110%'
      />
      <GalleryItem
        gridArea={'二'}
        urlSrc='img/firstdate.jpg'
        altSrc='First Date!'
        date='October 1st, 2019'
        chapter='Chapter Two'
        story={
          <>
            <p>
              Georgia: <br /> Alan had really impressed me with his hospitality
              and diligence. After a long summer, I felt Jehovah was helping me
              to clear my thoughts and weigh my decision carefully. When Alan
              asked to meet and talk I knew what my answer would be. Yes! I
              would like to get to know you better.
            </p>
            <p>
              Alan: <br /> Some months after that 5 year party, Georgia’s
              beautiful qualities hit me like a ton of bricks. I was conflicted!
              I knew she didn’t move near Bethel for a courtship, but I really
              wanted to leave the decision in her hands… After all, it’s just a
              question. Right?
            </p>
          </>
        }
        transformOrigin='50% -10%'
      />
      <GalleryItem
        gridArea={'三'}
        urlSrc='img/familyday2019.jpg'
        altSrc='Family Day 2019'
        date='October 19th, 2019'
        chapter='Chapter Three'
        story={
          <>
            <p>
              Georgia: <br /> My first family day was a privilege and a blast!
              Though we didn’t spend the entire day together, it was nice to get
              to meet up through the days activities.
            </p>
            <p>
              Alan: <br /> It couldn’t have been a more beautiful day to spend…
              pretending that Georgia and I were just casual friends. It was
              month 1 of the courtship, and we had every intention of taking it
              seriously. Rumors can spread fast. Nonetheless we sneaked in a
              quick picture.
            </p>
          </>
        }
        transformOrigin='50% 110%'
      />
      <GalleryItem
        gridArea={'四'}
        urlSrc='img/queensday.jpg'
        altSrc='Georgia accompanying Alan for a public talk in Queens'
        date='October 27th, 2019'
        chapter='Chapter Four'
        story={
          <>
            <p>
              Georgia: <br /> I knew I was dating a Chinese guy… but when I went
              to queens with Alan for his cantonese talk and explored his home
              neighborhood a bit, what that actually meant finally hit me. I
              like to call this day “a pleasant culture shock”.
            </p>
            <p>
              Alan: <br /> Georgia was so supportive to join me on an outgoing
              talk in the city! I was excited to show her my home area and its
              delicious asian foods. It was still month one, so it was nice to
              enjoy each other’s company while still maintaining our new
              courtship relatively private.
            </p>
          </>
        }
        transformOrigin='50% -10%'
      />
      <GalleryItem
        gridArea={'五'}
        urlSrc='img/bibletourday.jpg'
        altSrc='Day in the city with the Met Bible Tour'
        date='November 16th, 2019'
        chapter='Chapter Five'
        story={
          <>
            <p>
              Georgia: <br /> I knew of Alan’s history giving MET tours but this
              was my first one with him and I had a front row view. I enjoyed
              watching how good he was with the group and how he brought the
              bible information to life. Definitely a keeper!
            </p>
            <p>
              Alan: <br /> I’m so glad Georgia joined me on that Bible tour. I
              was hoping she’d think that I was more knowledgeable than I really
              was… I think it worked…
            </p>
          </>
        }
      />

      <GalleryItem
        gridArea={'六'}
        urlSrc='img/momaday.jpg'
        altSrc='Another city day at the MoMA, before Alan went to Argentina International'
        date='December 4th, 2019'
        chapter='Chapter Six'
        story={
          <>
            <p>
              Georgia: <br /> Being only 2 months into our courtship, I was very
              sad to have to say goodbye to Alan for a whole entire month as he
              left for Argentina. Despite it being a farewell, we really enjoyed
              our day in the city with friends.
            </p>
            <p>
              Alan: <br /> The day I was going to fly to Argentina for a month
              for International Convention. Back then it felt like a month apart
              was going to be forever. (If only we actually knew about 2020)… We
              decided to spend that day in the city to see me off.
            </p>
          </>
        }
        transformOrigin='50% 110%'
      />
      <GalleryItem
        gridArea={'七'}
        urlSrc='img/outsidekh.jpg'
        altSrc='Georgia at Alans meeting ... with crutches!!'
        date='January 23rd, 2020'
        chapter='Chapter Seven'
        story={
          <>
            <p>
              Georgia: <br /> After celebrating his 6 year Bethelversary I got
              to enjoy tagging along with him to his meeting. Despite not being
              able to get around so well, we got to take a few pictures and
              enjoy a celebratory Taco Bell run!
            </p>
            <p>
              Alan: <br /> She had surprised me earlier with some gifts for
              making 6 years of Bethel on that very day! I was going through a
              rough patch with a foot injury, but Georgia was so loving and
              attentive the whole time. She swept me off my feet! But that’s
              okay, I couldn’t walk on them anyway.
            </p>
          </>
        }
        transformOrigin='50% -10%'
      />
      <GalleryItem
        gridArea={'八'}
        urlSrc='img/lastday.png'
        altSrc='The day of lockdown... Last time hanging out at the Saenz'
        date='March 13, 2020'
        chapter='Chapter Eight'
        story={
          <>
            <p>
              Georgia: <br /> What a crazy day! I thank Jehovah I got to see
              Alan right before Bethel lockdown started. When the news got to
              us, we knew we had to savor a few final moments with each other
              before we spent an unknown period of time apart. Little did we
              know it would be so long.
            </p>
            <p>
              Alan: <br /> This was the last time we hugged. Bethel had just
              sent the urgent text message, and we were spending time at a
              friend’s house. We thought it would be a few weeks or months.
              Frankly, at that moment is was probably better that way.
            </p>
          </>
        }
        transformOrigin='50% 110%'
      />
      <GalleryItem
        gridArea={'九'}
        urlSrc='img/zoomconvention.png'
        altSrc='Watching 2020 regional convention together'
        date='August 2nd, 2020'
        chapter='Chapter Nine'
        story={
          <>
            <p>
              Georgia: <br /> We really made the best of our Zoom dating period.
              I appreciate how much it helped us focus on spiritual matters
              together. Watching the “Always Rejoice!” convention together was
              definitely a highlight. This was the closest thing to a couple
              selfie we were gonna get!
            </p>
            <p>
              Alan: <br /> The abrupt transition into long distance had its
              challenges. Yet, our newfound means of courting had its benefits
              too. It was encouraging to know that the brothers, Branch
              Committee, and Jehovah were so supportive and understanding of our
              predicament. With a lot of the “fluff” of dating out of the way,
              we were able to really focus on the “secret person of the heart”.
            </p>
          </>
        }
        transformOrigin='50% -10%'
      />
      <GalleryItem
        gridArea={'十'}
        urlSrc='img/zoomshenanigans.png'
        altSrc='Dressing up'
        date='January 8th, 2021'
        chapter='Chapter Ten'
        story={
          <>
            <p>
              Georgia: <br /> Getting to fully understand Alan’s sense of humor
              has been a blast! We always have a great time together. Humor has
              served as a useful tool for us to endure these tough times. I am
              so happy that we have been able to have such an awesome courtship
              even despite the crazy circumstances. All thanks goes to Jehovah!
              Some Bible character role play will definitely get the laughs
              going.
            </p>
            <p>
              Alan: <br /> Creativity has been a must in keeping things fun in
              our courtship. We’ve learned to be flexible and adaptable to our
              living situations with other roommates whilst carrying out our
              courtship. From the closet to kitchen, computer desk to bathroom,
              laying on the ground or walking the trails, Georgia has seen it
              all. (Or has she?)
            </p>
          </>
        }
        transformOrigin='50% 110%'
      />
      <GalleryItem
        gridArea={'十一'}
        scaleAmount={1.15}
        chapter='Chapter Eleven'
      />
    </GalleryContainer>
  );
};

export default Gallery;
