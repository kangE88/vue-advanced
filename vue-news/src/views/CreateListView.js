import { h } from 'vue';
import ListView from './ListView';

export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        //name: name, 은 아래와 같이 표현가능
        name,
        created(){
            this.emitter.emit("start:spinner");
            this.$store
            .dispatch("FETCH_LIST", this.$route.name)
            .then(() => {
                console.log("fetched");
                this.emitter.emit("end:spinner");
            })
            .catch((error) => {
                console.log(error);
            });
        },
        // render(createElement){
        //     return createElement(ListView);
        // }
        render(){
            return h(ListView);
        }
    }  
}