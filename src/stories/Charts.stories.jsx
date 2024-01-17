import Charts from "@/components/Charts";

export default {
    component: Charts,
    tags: ['autodocs'],
};


export const Default = {
    args:{
        id:'1',
        super_healthy_camera:70,
        healthy_camera:20,
        warning_camera:10,
        danger_camera:100,
    }
}
