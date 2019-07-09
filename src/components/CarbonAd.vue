<template>
  <div id="carbon-wrapper" :class="{vertical: layout == 'vertical'}">
  </div>
</template>

<style>
#carbonads {
  display: block;
  overflow: hidden;
  line-height: 1.5em !important;
  width: 400px;
  font-size: 13px;
  background-color: #12191f;
  margin: auto;
  border-radius: 5px;
  max-width: calc(100vw - 5em);
}

.vertical #carbonads {
  display: flex;
  width: 130px;
  flex-direction: column nowrap;
}

.vertical #carbonads .carbon-text {
  max-width: 100%;
}

.vertical #carbonads .carbon-poweredby {
  position: static;
}

#carbonads a {
    color: white;
}

#carbonads span {
  position: relative;
  display: block;
  overflow: hidden;
}

.carbon-img {
  float: left;
}

.carbon-img img {
  display: block;
  line-height: 1;
}

.carbon-text {
  display: block;
  float: left;
  max-width: calc(100% - 130px);
  text-align: left;
  padding: .5rem;
  box-sizing: border-box;
  opacity: .8;
  text-decoration: none !important;
}

.carbon-poweredby {
  position: absolute;
  right: 0;
  bottom: 0;
  display: block;
  font-size: .8em;
  line-height: 1;
  padding: .5rem;
  font-family: 'Poppins', 'Roboto', sans-serif;
  text-decoration: none !important;
}
</style>

<script>
export default {
  mounted () {
    let script = document.createElement('script')
    script.setAttribute('src', '//cdn.carbonads.com/carbon.js?serve=CK7IT5Q7&placement=twitchbotio')
    script.setAttribute('id', '_carbonads_js')
    document.querySelector('#carbon-wrapper').appendChild(script)
  },
  props: ['layout']
}
</script>
