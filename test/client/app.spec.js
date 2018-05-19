import Vue from 'vue';
import Vuex from 'vuex';
import App from '@/App.vue';

describe('App.vue', () => {
  let Constructor, vm;
  const routerView = {
    render: r => r('div', 'mocked component'),
  };

  beforeEach((done) => {
    Vue.use(Vuex);
    Constructor = Vue.extend(App);
    vm = new Constructor({
      mounted: () => done(),
      components: {routerView},
      store: new Vuex.Store({
        modules: {
          async: {
            namespaced: true,
            actions: {
              syncLoopback() {},
            },
          },
        },
      }),
    });
    vm.$mount();
  });

  afterEach(() => vm.$destroy());

  it('should render router component', () => {
    expect(vm.$el.innerHTML).to.equal('mocked component');
    expect(vm.$el.getAttribute('id')).to.equal('app');
  });
});
