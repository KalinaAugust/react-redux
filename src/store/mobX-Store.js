import { observable, action, computed } from 'mobx';


class MobxStore {
  @observable tabTitle = 'title from mobX!';

  @observable videoUrl = 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4';

  @action changeTitle = (newTitle) => {
    this.tabTitle = newTitle;
  };

  @action changeVideoUrl = (newVideoUrl) => {
    this.videoUrl = newVideoUrl;
  };

  @action clearStoreHandler = () => {
    this.videoUrl = '';
    this.tabTitle = '';
  };

  @computed get getTitle() {
    return this.tabTitle.toUpperCase();
  }
}


const store = new MobxStore();
export default store;
