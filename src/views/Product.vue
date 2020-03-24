<template>
  <div class="product">
    <b-container fluid class="container-color px-0">
      <b-row class="remove-row-margin custom-row-w mx-auto">
        <b-col cols="9" class="pl-0">
          <b-card class="remove-p-card-body">
            <b-row class="remove-row-margin">
              <b-col cols="8" class="p-0">
                <ProductZoomer
                  :base-images="images"
                  :base-zoomer-options="zoomerOptions"
                />
              </b-col>
              <b-col cols="4" class="p-0">dffggfgfg</b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col cols="3" class="px-0">
          <b-card class="remove-p-card-body">gvjvffhfhfhfvv</b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style scoped>
.container-color {
  background-color: #f5f5f5;
}
.remove-row-margin {
  margin: 0;
}
.custom-row-w {
  max-width: 1184px;
}
.card.remove-p-card-body .card-body {
  padding: 0;
}
</style>
<script>
export default {
  name: 'app',
  data() {
    return {
      images: {
        thumbs: [
          {
            id: 1,
            url:
              'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/93/616663/3.jpg?9511'
          },
          {
            id: 2,
            url:
              'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/93/616663/4.jpg?9511'
          },
          {
            id: 3,
            url:
              'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/93/616663/5.jpg?9511'
          }
        ],
        normal_size: [
          {
            id: 1,
            url: '/shoeone_resize.png'
          },
          {
            id: 2,
            url: '/shoetwo_resize.png'
          },
          {
            id: 3,
            url: 'shoethree_resize.png'
          }
        ],
        large_size: [
          {
            id: 1,
            url:
              'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/93/616663/3.jpg?9511'
          },
          {
            id: 2,
            url:
              'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/93/616663/4.jpg?9511'
          },
          {
            id: 3,
            url:
              'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/93/616663/5.jpg?9511'
          }
        ]
      },
      zoomerOptions: {
        zoomFactor: 3,
        pane: 'pane',
        hoverDelay: 300,
        namespace: 'zoomer-bottom',
        move_by_click: true,
        scroll_items: 3,
        choosed_thumb_border_color: '#dd2c00',
        scroller_position: 'bottom',
        zoomer_pane_position: 'right'
      }
    }
  }
}
</script>
