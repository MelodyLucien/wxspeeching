Page({
    data: {
      title: "超级演讲家",
      des: "专业指导, 极致践行, 用演讲成就梦想。",
        list: [
            {
                id: 'form',
                name: '初级',
                open: false,
                pages: ['吐字需清晰', '气息需流畅', '演讲定内容', '滔滔能不绝']
            },
            {
                id: 'widget',
                name: '进阶',
                open: false,
              pages: ['点评促交流', '赞美得欣赏','表情需到位','录制小视频','刻意要练习']
            },
            {
                id: 'feedback',
                name: '高级',
                open: false,
              pages: ['寻找切入点', '引经又据典', '增加说服力', '个人特色强', '又上一层天']
            }
        ]
    },
    kindToggle: function (e) {
        var id = e.currentTarget.id, list = this.data.list;
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open
            } else {
                list[i].open = false
            }
        }
        this.setData({
            list: list
        });
    }
});
