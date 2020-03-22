<template>
  <div class="home">
    <Navbar :categories="categories" />
    <div style="" class="wrapper">
      <b-container fluid class="px-5 py-3 remove-py">
        <b-row>
          <b-col
            lg="2"
            md="3"
            sm="3"
            class="pr-0 d-none d-sm-block category-wrapper"
          >
            <b-card-group deck style="height: 100%">
              <b-card
                no-body
                style="border: none; font-size: 16px;"
                header="Categories"
                class="text-left h3"
              >
                <b-list-group class="text-left">
                  <b-list-group-item
                    style="border: none; font-size: 16px; padding: 0.3rem 1.25rem ;"
                    v-for="item in categories"
                    :key="item.title"
                    href="#some-link"
                    class="h5"
                  >
                    <!-- <span><b-icon icon="alert-triangle"></b-icon></span> -->
                    {{ item.title }}
                  </b-list-group-item>
                </b-list-group>
              </b-card>
            </b-card-group>
          </b-col>
          <b-col lg="8" sm="9" md="9">
            <b-row class="px-3 pb-3">
              <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="3000"
                fade
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="500"
                style="text-shadow: 1px 1px 2px #333; width: 100%;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
              >
                <!-- Text slides with image -->
                <b-carousel-slide
                  img-src="https://picsum.photos/1024/500/?image=5"
                ></b-carousel-slide>

                <!-- Slides with custom text -->
                <b-carousel-slide
                  img-src="https://picsum.photos/1024/500/?image=4"
                >
                </b-carousel-slide>

                <!-- Slides with image only -->
                <b-carousel-slide
                  img-src="https://picsum.photos/1024/500/?image=3"
                ></b-carousel-slide>

                <!-- Slides with img slot -->
                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100"
                      width="1024"
                      height="300"
                      src="https://picsum.photos/1024/500/?image=2"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>

                <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100"
                      width="1024"
                      height="500"
                      src="https://picsum.photos/1024/500/?image=2"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </b-row>
            <b-row>
              <b-col cols="12" class="py-0">
                <b-card header="Featured Products" class="my-card-title">
                  <b-row>
                    <b-col
                      lg="3"
                      sm="6"
                      md="4"
                      xs="12"
                      v-for="product in products"
                      :key="product.name"
                      class="p-0 px-3 pb-3"
                    >
                      <a href="" class="product-link">
                        <b-card>
                          <img
                            :src="product.pics"
                            style="width: 100%; margin-bottom: 1rem;"
                          />
                          <div class="text-left">
                            <p class="product-title">
                              {{ product.name }}
                            </p>
                            <b-card-text>
                              ₦ 50000
                            </b-card-text>
                          </div>
                        </b-card>
                      </a>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col cols="12" class="py-0">
                <b-card
                  header="Flash Sales"
                  class="my-card-title flash-sales-title"
                >
                  <b-row>
                    <b-col
                      lg="3"
                      sm="6"
                      md="4"
                      xs="12"
                      v-for="product in products"
                      :key="product.name"
                      class="p-0 px-3 pb-3"
                    >
                      <a href="" class="product-link">
                        <b-card>
                          <img
                            :src="product.pics"
                            style="width: 100%; margin-bottom: 1rem;"
                          />
                          <div class="text-left">
                            <p class="product-title">
                              {{ product.name }}
                            </p>
                            <b-card-text>
                              ₦ 50000
                            </b-card-text>
                          </div>
                        </b-card>
                      </a>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col cols="12" class="py-0">
                <b-card
                  header="Store Recommendation"
                  class="my-card-title recommendation-sales-title"
                >
                  <b-row>
                    <b-col
                      lg="3"
                      sm="6"
                      md="4"
                      xs="12"
                      v-for="product in products"
                      :key="product.name"
                      class="p-0 px-3 pb-3"
                    >
                      <a href="" class="product-link">
                        <b-card>
                          <img
                            :src="product.pics"
                            style="width: 100%; margin-bottom: 1rem;"
                          />
                          <div class="text-left">
                            <p class="product-title">
                              {{ product.name }}
                            </p>
                            <b-card-text>
                              ₦ 50000
                            </b-card-text>
                          </div>
                        </b-card>
                      </a>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="2" class="pl-0 d-none d-sm-none d-lg-block">
            <b-row>
              <b-col cols="12">
                <b-card class="mb-3 card-right-height"> </b-card>
              </b-col>
              <b-col cols="12">
                <b-card class="card-right-height"> </b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>
<style scoped>
.remove-border {
  border: none;
}
</style>
<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  data() {
    return {
      categories: [
        { title: 'Fashion', link: 'fddff' },
        { title: 'Computing', link: 'dffwe' },
        { title: 'Phones & tablets', link: 'fffdfdf' },
        { title: 'Grocery', link: 'fffdfdf' },
        { title: 'Health & Beauty', link: 'dfdfdff' }
      ],
      slide: 0,
      sliding: null,
      products: [
        {
          name: 'Elegant Designer Athletic Sneakers V2- Gold & Black',
          pics: '/shoe.jpg',
          price: 'sda',
          description: 'rrrewe'
        },
        {
          name: 'God Over Everything Print T-Shirt - Navy Blue',
          pics: '/shirt.jpg',
          price: 'awwq',
          description: 'were'
        },
        {
          name: 'HS121L (93-Litre) Single Door Fridge - Silver',
          pics: '/fridge.jpg',
          price: 'err',
          description: 'qwqw'
        },
        {
          name: 'LED Backlight Sport Waterproof Quartz Wrist Watches-Black',
          pics: '/watch.jpg',
          price: 'wee',
          description: 'ttr'
        }
        // { name: 'eww', price: 'wdf', description: 'ww' },
        // { name: 'qww', price: 'wes', description: 'ewe' },
        // { name: 'eef', price: 'ew', description: 'dds' },
        // { name: 'tbf', price: 'ewwee', description: 'sdds' }
      ]
    }
  },
  components: {
    Navbar,
    Footer
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>
<style scoped>
.wrapper {
  margin-top: 56px;
  background-image: url('https://ng.jumia.is/cms/8-18/fashion-frenzy/BG-FF.jpg');
}
.category-wrapper {
  position: -webkit-sticky;
  position: sticky;
  top: 62px;
  height: 402px;
}
.my-card-title .card-header {
  text-align: left;
  font-size: 1.3rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #14191f;
}
.my-card-title .card-body {
  padding-bottom: 0;
}
.flash-sales-title,
.recommendation-sales-title {
  border: none;
}
.flash-sales-title .card-header {
  color: #fff;
  background-color: red;
}
.recommendation-sales-title .card-header {
  color: #fff;
  background-color: rgb(50, 116, 50);
}
.card-right-height {
  height: 193px;
}
.product-title {
  margin-bottom: 0.3rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.product-link {
  text-decoration: none;
  color: rgb(31, 29, 29);
}
</style>
