// pages/qa/qa.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        c_q1:'参加这试验安不安全?对身体有什么影响?',
        c_a1:'这试验是按照国际标准下的成分血单采术设计，单次从志愿者体内获得的免疫细胞量少，抽取时间更久，安全性更高，每次参加完该项目需间隔三个月 时间才能再次参加，确保参加项目的志愿者的健康不受影响。通过体检要求 的志愿者在完成项目后，三天内身体免疫力偏虚弱，避免这段期间饮酒、熬夜、过度运动或是过度劳累，之后对身体并无损伤。',
        c_q2:'体检时间多长?正式参加项目时间多久?',
        c_a2:'体检时间约为正常非假期的周内时间周一至周五上午，大约需要 30 分钟。正式参加项目需要 3-4 小时时间，一个上午时间或下午时间。',
        c_q3:'个人信息是保密的吗?',
        c_a3:'您的医疗记录(化验单等)将完整地保存在医院。研究者、伦理委员会和药品监督管理部门将被允许查阅您的医疗记录。任何有 关本项研究结果的公开报告将不会披露您的个人身份。我们将在法律允许的范围内，尽一切努力保护您个人医疗资料的隐私。',
        c_q4:'参与费用是什么时候发放，什么形式?介绍朋友参加有报酬吗?',
        c_a4:'参与费用是当您作为志愿者参加完体检，体检合格后等待安排成分血捐血(或其他研究试验项目)，完成该项目及立刻发放营养补贴费用。',
        c_q5:'可以自愿选择参加研究和中途退出研究',
        c_a5:'是否参加本项研究由您自己决定。您可以和您的家人或者朋友讨论后再做出决定。在做出参加研究的决定前，请尽可能向你的医生询问有关问题， 直至您对本项研究完全理解。是否参加研究完全取决于您的自愿。您可以拒绝参加此项研究，或在研究过程中的任何时间退出本研究。',
        c_q6:' 万一在参加研究期间受到损害怎么办?',
        c_a6:'此项目已经购买商业保险，保单中载明的临床试验活动过程中因细胞采集过程中出现严重不良事件，医院或项目发起公司将按国家有关规定支付您 因发生与研究相关的损害所产生的费用及相应的经济补偿，有任何不良反应将确保您在研究期间和之后得到相应的治疗和指导。',
        e_q1:'Is it safe to take WBC test? Will body affect?',
        e_a1:'The WBC test is designed according to the blood component apheresis under international standards. The number of immune cells obtained from the volunteers in a single time is less, the extraction time is longer, and the safety is higher. It takes three months after each participation in the project. To participate again, to ensure that the health of the volunteers participating in the project is not affected. Volunteers who have passed the physical examination requirements will have weak immune systems within three days after completing the project. During this period, they should avoid drinking alcohol, staying up late, exercising excessively or being overworked, and there will be no damage to the body afterwards.',
        e_q2:'How long will it take for physical examination? And how much time it takes to the final participate in this project?',
        e_a2:'The physical examination time is about 30 minutes from Monday to Friday morning during normal non-holiday weeks. Formal participation in the project takes 3-4 hours, a morning or afternoon.',
        e_q3:'Is personal information confidential?',
        e_a3:'Your medical records (labs, etc.) will be kept in the hospital in their entirety. Investigators, ethics committees and drug regulatory authorities will be allowed to access your medical records. Any public reporting of the results of this study will not disclose your personal identity. We will make every effort to protect the privacy of your personal medical information to the extent permitted by law.',
        e_q4:'When will the participation fee be paid and in what form? Do I get paid to refer friends to participate?',
        e_a4:'The participation fee is when you have completed the physical examination as a volunteer, and after passing the physical examination, you will wait for the arrangement of component blood donation (or other research and experimental projects), complete the project and immediately pay the nutritional subsidy fee. Paying by Alipay or Wechat wallet.',
        e_q5:'You can voluntarily choose to participate in the study and withdraw from the study',
        e_a5:'It is up to you to decide whether to take part in this study. You can discuss it with your family or friends before making a decision. Before making a decision to participate in a study, ask your doctor as many questions as possible until you fully understand the study. Participation in research is entirely voluntary. You may refuse to participate in this study, or withdraw from this study at any time during the study.',
        e_q6:'What if I get harmed during this project?',
        e_a6:'Commercial health insurance has been purchased for this project. As stated in the policy, due to serious adverse events during cell collection during the clinical trial activities, the hospital or the project sponsoring company will pay you for the research-related damages in accordance with relevant national regulations. and corresponding financial compensation, any adverse reactions will ensure that you receive appropriate treatment and guidance during and after the study.',
        k_q1:'이 테스트에 참여하는 것이 안전한가요? 신체는 어떻게 영향을 받습니까?',
        k_a1:'본 검사는 국제표준의 혈액성분채집법에 따라 설계되었으며, 1회 지원자로부터 채취한 면역세포의 양이 적고, 추출시간이 길며, 안전성이 높으며, 각 참여 후 3개월 소요 프로젝트에 다시 참여하여 프로젝트에 참여하는 자원 봉사자의 건강에 영향을 미치지 않도록 합니다. 신체검사를 통과한 자원봉사자는 프로젝트 완료 후 3일 이내에 면역 체계가 약해지며 이 기간 동안 음주, 야식, 과로 및 과도한 운동을 피해야 하며 신체에 손상이 없어야 합니다. 나중에.',
        k_q2:'신체검사는 얼마나 걸립니까? 프로젝트에 공식적으로 참여하는 데 얼마나 걸립니까?',
        k_a2:'신체 검사 시간은 공휴일이 아닌 일반 주간에 월요일부터 금요일 아침까지 약 30분입니다. 프로젝트에 정식으로 참여하려면 오전이나 오후에 3-4시간이 걸립니다.',
        k_q3:'개인 정보는 기밀입니까?',
        k_a3:'귀하의 의료 기록(검사실 등)은 완전히 병원에 보관됩니다. 조사관, 윤리 위원회 및 약물 규제 당국은 귀하의 의료 기록에 액세스할 수 있습니다. 이 연구 결과에 대한 공개 보고는 귀하의 개인 신원을 공개하지 않습니다. 당사는 법률이 허용하는 범위 내에서 귀하의 개인 의료 정보를 보호하기 위해 최선을 다할 것입니다.',
        k_q4:'참가비는 언제, 어떤 형태로 지급되나요? 친구가 참여하도록 추천하면 돈을 받나요?',
        k_a4:'참가비는 자원봉사자로 신체검사를 마치고 신체검사에 합격한 후 성분헌혈(또는 기타 연구 및 실험과제) 준비를 기다린 후 프로젝트를 완료하고 즉시 영양보조금을 납부할 때이다.',
        k_q5:'자발적으로 연구 참여를 선택하고 연구를 철회할 수 있습니다',
        k_a5:'이 연구에 참여할지 여부를 결정하는 것은 귀하에게 달려 있습니다. 결정을 내리기 전에 가족이나 친구와 상의할 수 있습니다. 연구 참여를 결정하기 전에 연구를 완전히 이해할 때까지 의사에게 가능한 한 많은 질문을 하십시오. 연구 참여는 전적으로 자발적입니다. 귀하는 이 연구 참여를 거부하거나 연구 중 언제든지 이 연구에서 철회할 수 있습니다.',
        k_q6:'연구에 참여하는 동안 상해를 입으면 어떻게 합니까?',
        k_a6:'본 프로젝트는 상업 보험에 가입되어 있으며, 정책에 명시된 바와 같이 임상 시험 활동 중 세포 수집 중 심각한 부작용으로 인해 병원 또는 프로젝트 후원 회사는 관련 국가 규정에 따라 연구 관련 손해를 귀하에게 지불합니다. 규정 및 상응하는 재정적 보상, 모든 부작용은 연구 중 및 연구 후에 적절한 치료와 지도를 받을 수 있도록 합니다.',
        language:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const app = getApp()
        const language = app.globalData.language
        this.setData({
            language: language,
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})