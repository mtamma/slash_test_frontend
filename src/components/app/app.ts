import _ from 'lodash';

export default {
    name: 'App',
    computed: {
        layout() {
            const layout: string = _.get(this.route, 'meta.layout', 'default');
            return `${layout}-layout`;
        }
    }
}