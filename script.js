$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 20, 'linear')
    });
});


document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Ravali Gali";
            $("#favicon").attr("href", "https://res.cloudinary.com/dphkbv1mt/image/upload/v1730962487/Picsart_24-11-07_12-17-32-395_lp3zrm.jpg");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "https://res.cloudinary.com/dphkbv1mt/image/upload/v1730962487/Picsart_24-11-07_12-17-32-395_lp3zrm.jpg");
        }
    });
    let project_sandeep=["https://res.cloudinary.com/dphkbv1mt/image/upload/v1723720038/gt5jyf5r9cteoe7zofa6.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723720043/k45xxbcolaqpulokcdwk.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723720042/n3g2k4kb5e8mzobpfpdi.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723720041/odrnho5e9numh6wdhsci.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723720041/awtwklkmvbgzfezbzmgp.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723720041/as6nunju8plvgba2ado9.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723720041/czssbspd2oc1qdsmqh9x.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723720041/zfifvwbvlwpwnjwinqez.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723720040/u7kkbkc2dvjnmodchhvw.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723720039/db72fny0oh9c1tsbanqz.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723720038/zguethhoyv78xdamxxdb.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723720038/ujrojcshtdb3m4wsvt7n.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723720038/fx3933i3jacx10n58uoy.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723720038/o1mwoxr5ok0olgatnksn.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723720038/fvhkuayxonogf98pkwob.jpg","https://drive.google.com/file/d/1S2r-qmxRRgSvIRbwgt7e4m5x3AV42kH6/view?usp=sharing"];
    let project_uma=["https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732141/wgvq5oasehz6kykhtih0.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732167/xxwlfhubvnh8wfw7plot.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732227/pyxaqwurtjfbezkrb4ib.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732229/ps1ius6yexia0gasbk6v.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732230/jal7ug4ahrspsi8rar1s.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732230/mfdvus6ud8flxyoprn29.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732234/q41gj3dvxbnww8hti1fs.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732236/wd6jbjpl51yatzvwwvw0.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732237/zwaqw0aijj3jxz6kmpsz.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732239/ehhigark6wiyfys8uipr.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732241/mulhuu8uka3v5dfdpoat.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732243/bjiavupg9mtusdhlfhm5.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732246/u4nyiauhzlhqo1sijmmm.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732247/oxwag3hhn8ogqi7ae9zz.jpg","https://drive.google.com/file/d/1jgcuas1Kp19lw0QMIh7ElpOVg4_e7Dtq/view?usp=sharing"];
    let project_sathish=["https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732035/ma1wmnpkrgnhuhbncmp5.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732071/muy9wknt8mw9fz3ahuu6.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732072/sd0muncg9ennidc0znni.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732072/lkmqqmdxgfvvfhkxaczo.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732073/t1z6fswbhteawjwl4u0m.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732074/a6tdva7rrkv1ytv4b2yq.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732075/nez5w6yjz4qv87webxdo.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732076/iflmbyklhhrtolplqt1f.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732077/dq5vsac4eb5fbfsznxce.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732078/vfddyau38rfr8pf2akmn.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732081/xinbzpcqvf16egt0fthj.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732082/y5gxki3zj5h6jmx8euym.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723732083/bnkh8jx2gdtjwo6ecggm.jpg","https://drive.google.com/file/d/1Rst5dIJt1Py3rn3C-K4U2bdIdLugb4pU/view?usp=sharing"];
    let project_yadhagiri=["https://res.cloudinary.com/dphkbv1mt/image/upload/v1723731825/noo8aexurydry2upzkre.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723731836/wlkmtkczhvddzit6bzl9.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723731891/du4kfoybiaiveudfxfzm.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723731893/skf6sebvfvn40kklorps.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723731893/jkubjozrhps7ubnabwkw.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723731894/dpm1zhfv4wzw5y23gsha.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723731895/suoshhphdrofo6jmvrfc.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723731896/bcz7wtzominbibzegnox.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723731896/lt75d0pundlefhr81ty0.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723731897/suxrrrwdk6uz1r6sveum.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723731897/lwzipz5endxw51dznwxr.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723731898/lju6tcjjsxpbmnetlew2.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723731900/tcm6kjeqtsrwvoj3fyay.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723731901/ortrywwq3kzvjvcycgnf.jpg","https://drive.google.com/file/d/1f_Zvc8sNWaCKOjJWiokdPJUKlrL8qtWG/view?usp=sharing"];
    let project_restaurant=["https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790644/s9zyfgo3e8gmvs6tpbjv.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790644/yl3grvu5baz0yq0mrcto.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790645/ji6w0xcxztogxxdn8t5n.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790645/f7e3wqahqaqkpnr3strp.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790646/j4xdh37x6duyeq1mk4uk.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790649/nh8aj3yum9uwrokxxjyl.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790650/kmatzspqqccvzzgk1l37.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790650/dhrofa4vionppr715pup.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790651/kelp99u9tkn3pc837f6v.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790655/b8jvpilkssnonqqmahzc.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790656/nupdk6o0p17kepysuhsg.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790656/adcjciljs1c6ghalxpnx.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790657/nhjxfl6zgtuu0zb1hss6.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790660/nah49yjbekcl4to4dz68.jpg","https://drive.google.com/file/d/15rUtmGjbZd7SE9WYsU1M1Y9x9cUWDvUc/view?usp=sharing"];
    let project_ai=["https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790585/qfnvafrwxmdxbnhsbbuf.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790586/knt6dhcp6ywrjspxf761.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790586/jcxck7v0lxdcimn2untw.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790587/nf01v0hsozrnji98iqop.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790587/edvuoftr7wfespryachi.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790589/swotkpangatqnes38yg8.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790591/glmbmdfvvk0swpb42ueb.jpg","https://drive.google.com/file/d/12cVA3jH50FdSEXOp_wzIAhCkndrdzYOg/view?usp=sharing"];
    let project_living_room=["https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790471/t0tutft1x2h7qmlqbbun.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790471/fbztbyq5cu3nqoqcjmfe.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790472/sku1weiahcgbiqcnnh8d.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790472/fnhgqjw6w1eg1rrwxpa3.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790473/ajwrxmqq7uopua3xgasv.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790474/h9efhccdlvzqguqq1pww.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790476/q6ng4auepbci1670buiv.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790476/k4mupqujaollir9vojhv.jpg","https://drive.google.com/file/d/1Lu8SGHHSSxZ-gvslUkf8rOMKr4uuqFJo/view?usp=sharing"];
    let project_bhk4=["https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790391/pboihr4rsqiufntc388u.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790400/lbcjoltat6wxq7gvvl3k.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790400/dbw9flbsd5gczx0vqbrw.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790392/ng1bsqi8dftdynmjtdra.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790396/mgb5o7rifkyw0fqmuzcn.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790396/mwiarondueiwhfvzzdfh.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790397/xkmkotsln1ujvbsfukop.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790399/kmisbkihg2bvhi8acx72.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790400/t9xyhcgkodkcddtillpb.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790401/n5wfy0owd0s82cc0aj8z.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723790391/jl4ipd7bhyujjzs7nqcj.jpg","https://drive.google.com/file/d/1prK7NBPh6MmRF2dIvX7v_V_JbBYPPm5X/view?usp=sharing"];
    let project_sketch=["https://res.cloudinary.com/dphkbv1mt/image/upload/v1723789947/rl2ut8e8draugbteygzq.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723789945/aphcngnsbdgchhwq02dg.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723789946/u2hadcbkmwroqvqsrvko.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723789947/j2fm6ajhkw4pep2npjnb.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723789945/camvythmwxnu2s27sckb.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723789947/esv1fbhs4ay8bffwbykk.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723789949/jqceledszi35hgowczmf.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723789949/ffjjnczhzo0r4djsekl6.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723789951/vt5zazl01icebxntkpz7.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723789954/oxsucli5f4mjux3gibll.jpg","https://drive.google.com/file/d/19OptN9OxOvG4mi7GUtyr9-RjAe9ABzRQ/view?usp=sharing"];
    let project_parlour=["https://res.cloudinary.com/dphkbv1mt/image/upload/v1723799562/p6woslwu5bupqbtelfg0.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723799562/cfeo3m1dlad4qoymb5rx.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723799562/m2yngpjcwywqwk9t5ext.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723799563/l3bknv57xzvbowyfpqwj.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723799563/xyplde6rjdl9quu5grep.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723799566/x3u7vs3ulorsd6wvskje.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1723799567/y0pebts7i7rnel9ioliu.jpg","https://drive.google.com/file/d/1uC1gYzh6azO9iYV-fruWzsMhuZtTNYOi/view?usp=sharing"];
    let project_library=["https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798329/aonxbohwpajjgqmqd0fz.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798352/rvurypgasoezi3ppk8c9.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798350/facvbhc7ohqa7rtvmpo6.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798350/z32tnda7gahputfpbsx3.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798338/w0kp40iqbhxozclbjhce.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798349/jt879tpvb50ryeohrpho.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798345/icginxbftuksthcnwlk0.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798348/u4snqmoo2ev7ft8tdv0v.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798332/k93xdjjoldjhbf7rdscb.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798340/zl6yf58nuby6pfumq2bd.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798354/ljt2xy32phde940sbfvw.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798356/bsqezcht3mkepejedv0j.jpg","https://drive.google.com/file/d/1r5O68aih4HIhxEv9NYRr2N67UT_8X2bN/view?usp=sharing"];
    let project_render=["https://res.cloudinary.com/dphkbv1mt/image/upload/v1730962456/WhatsApp_Image_2024-11-06_at_21.19.17_ea5a96ac_page-0003_t2hmxg.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730962455/WhatsApp_Image_2024-11-06_at_21.19.17_ea5a96ac_page-0007_ole8ai.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730962453/WhatsApp_Image_2024-11-06_at_21.19.17_ea5a96ac_page-0001_zno1hd.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730962451/WhatsApp_Image_2024-11-06_at_21.19.17_ea5a96ac_page-0012_jjnfae.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730962451/WhatsApp_Image_2024-11-06_at_21.19.17_ea5a96ac_page-0006_qgfo99.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730962443/WhatsApp_Image_2024-11-06_at_21.19.17_ea5a96ac_page-0002_cl0zg0.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730962443/WhatsApp_Image_2024-11-06_at_21.19.17_ea5a96ac_page-0011_d3r9nu.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730962438/WhatsApp_Image_2024-11-06_at_21.19.17_ea5a96ac_page-0010_jmq91t.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730962433/WhatsApp_Image_2024-11-06_at_21.19.17_ea5a96ac_page-0009_av7znp.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730962429/WhatsApp_Image_2024-11-06_at_21.19.17_ea5a96ac_page-0008_azxv0p.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730962425/WhatsApp_Image_2024-11-06_at_21.19.17_ea5a96ac_page-0004_iadp82.jpg","https://drive.google.com/file/d/1dDN_iVeOBQfr09yGcuZDHSs_ijTTaw-t/view"];
    let project_hospital=["https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798299/bz1q8w2mb9uzc1evl1zv.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798289/jvqjmv3auicb0s6vjlmv.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798289/ztyrinakuo2hapfsbt7m.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798326/a2bn93dqzvm5hdo5ncj6.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798279/kbn1dewqapf7i8vysizc.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798304/duhyy90jg8eny3oqtihk.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798318/giiywdbxcy6sae9dw0wy.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798329/cat2ickpyrrfcjpdhy2u.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798301/dbxw76yf7r53zfudip8a.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798324/c9usk7rzehyjvvsy9ffe.jpg","https://res.cloudinary.com/dphkbv1mt/image/upload/v1730798345/ynf7aeuxpardmkj55ymb.jpg","https://drive.google.com/file/d/1yJIOKsLeQeIORy2OEI5JvornwrB_Anfm/view?usp=sharing"];
    let project_names=["sathish","uma","sandeep","yadhagiri","ai","bhk","restaurant","living","library","hospital","parlour","sketch","render"];
    function carousel_img(list,name_project){
        let img_list=`
                      <div class="carousel-item active">
                        <img src=${list[0]} class="d-block w-100" alt="...">
                      </div>`;
        let ind_list=`<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active mb-lg-2 mt-5" aria-current="true" aria-label="Slide 1"></button>`
        for(let i=1;i<list.length-1;i++){
            img_list += `<div class="carousel-item">
                        <img src=${list[i]} class="d-block w-100" alt="...">
                         </div>`
            ind_list += `<button class="mb-lg-2 mt-5" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="${i}" aria-label="Slide ${i+1}"></button>
    `
        }
        document.getElementById("pdf_project").href=list[list.length-1];
        document.getElementById("ref_pro_img").innerHTML =img_list;
        document.getElementById("ind_pro").innerHTML =ind_list;
        for(let j=0;j<project_names.length;j++){
            if(project_names[j]==name_project){
                document.getElementById(`${name_project}`).style.backgroundColor="transparent";
                document.getElementById(`${name_project}`).style.color="rgb(255, 229, 0)";
                document.getElementById(`${name_project}`).style.fontWeight="bold";
            }
            else{
                document.getElementById(project_names[j]).style.backgroundColor="rgb(46, 1, 135)";
                document.getElementById(project_names[j]).style.color="white";
                document.getElementById(project_names[j]).style.fontWeight="normal";
            }
        }
    }
    carousel_img(project_render,'render');

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["INTERIOR DESIGNER", "JUNIOR ARCHITECTURE"],
    loop: true,
    typeSpeed: 70,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.windowKey && e.keyCode == ''.charCodeAt(0)) {
        return false;
    }
}

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h2' , { delay: 100});
srtop.reveal('.home .content h3', { delay: 300 });
srtop.reveal('.home .content p', { delay: 500 });
srtop.reveal('.home .content .btn', { delay: 700 });
srtop.reveal('.home .content .socials', { delay: 900 });

srtop.reveal('.home .email_s', { delay: 200 });
srtop.reveal('.home .phone_s', { delay: 400 });
srtop.reveal('.home .facebook_s', { delay: 600 });
srtop.reveal('.home .instagram_s', { delay: 800 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-containar', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });
srtop.reveal('.about .image', { delay: 400 });


/* SCROLL SKILLS */
srtop.reveal('.skills .containar', { interval: 200 });
srtop.reveal('.skills .containar .bar', { delay: 200 });
srtop.reveal('#achievements .achieve', { interval: 100 });


/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .pro_ref', { interval: 100 });
srtop.reveal('.footer .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .containar', { interval: 400 });
