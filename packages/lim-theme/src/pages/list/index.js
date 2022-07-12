import React from "react";
import { connect } from "frontity";
import StoriesGrid from "../../components/stories-grid";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import Story from "../../components/UI/story";

const List = (props) => {
  const { state, dontLazyloadFirstCard} = props;
  const data = state.source.get(state.router.link);
  const items = data.items;

  return (
    <section className="py-5">
      <StoriesGrid state={state} items={items} dontLazyloadFirstCard={dontLazyloadFirstCard}/>
      {/* <Swiper
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {items.map((item, index) => {
          const post = state.source[item.type][item.id];
          return (
            <SwiperSlide key={index}>
              <Story data={post} />
            </SwiperSlide>
          );
        })}
      </Swiper> */}
    </section>
  );
};

export default connect(List);
