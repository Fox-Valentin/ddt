I$(413,"{#if list.length!=0}\n\t<h4 class=\"newRecomTitle\">相关推荐<b>购买了该商品的人还买了这些</b>\n       {! <a href=\"javascript:;\" class=\"rec-refresh\" on-click={this.refresh($event)}>\n         <span class=\"refresh-icon\" r-html={refreshIcon}></span>\n         <span class=\"refresh-txt\">换一批</span>\n       </a> !}\n    </h4>\n\t<div class=\"m-reclst clearfix\">\n\t{#list list as item}\n\t<div class=\"newRecomItemWrap newRecomItemWrap-{item_index+1}\" on-click={this.clickRecommendTj(item_index,item.goodsId,condition.tongji.from)}>\n\t\t{#if item.memberCount && item.memberCount>0}\n\t\t<a class=\"itemImg\" target=\"_blank\" href=\"/product/{item.goodsId}.html?{condition.tongji.query}{item.reason|encode}&istext=0\">\n\t\t\t<img border=\"0\" title=\"{item.memberCount}{item.memberUnitName || '件'}装 | {item.title}\" alt=\"{item.memberCount}{item.memberUnitName || '件'}装 | {item.title}\" src=\"{(item.imageUrlFor430||item.imageUrl)|noProtocol}\" style=\"opacity: 1;\">\n\t\t</a>\n\t\t<p {#if !!item.saleShow}class=\"itemTitle hasPromotion\"{#else}class=\"itemTitle\"{/if}>\n\t\t\t<a class=\"protitle\" href=\"/product/{item.goodsId}.html?{condition.tongji.query}{item.reason|encode}&istext=1\" title=\"{item.memberCount}{item.memberUnitName || '件'}装 | {item.title}\" target=\"_blank\"><b>{item.memberCount}{item.memberUnitName || '件'}装</b>&nbsp;|&nbsp;{item.title}</a>\n\t\t</p>\n\t\t{#else}\n\t\t<a class=\"itemImg\" target=\"_blank\" href=\"/product/{item.goodsId}.html?{condition.tongji.query}{item.reason|encode}&istext=0\">\n\t\t\t<img border=\"0\" title=\"{item.title}\" alt=\"{item.title}\" src=\"{(item.imageUrlFor430||item.imageUrl)|noProtocol}\" style=\"opacity: 1;\">\n\t\t</a>\n\t\t<p {#if !!item.saleShow}class=\"itemTitle hasPromotion\"{#else}class=\"itemTitle\"{/if}>\n\t\t\t<a class=\"protitle\" href=\"/product/{item.goodsId}.html?{condition.tongji.query}{item.reason|encode}&istext=1\" title=\"{item.title}\" target=\"_blank\">{item.title}</a>\n\t\t</p>\n\t\t{/if}\n\t\t{#if !!item.saleShow}\n\t\t<p class=\"promotion\"><span title=\"{item.saleShow||''}\">{item.saleShow||''}</span></p>\n\t\t{/if}\n\t\t<div class=\"itemInfo clearfix\">\n\t\t\t<p class=\"price\"><span class=\"symbol\">¥</span>{item.actualCurrentPrice}<span class=\"marprice\">¥<del>{item.marketPrice}</del></span></p>\n\t\t\t<a href=\"/product/{item.goodsId}.html?{condition.tongji.query}{item.reason|encode}&istext=2#mainBtmWrap\" target=\"_blank\" class=\"comment\">{item.commentCount} 人已评价</a>\n\t\t</div>\n\t</div>\n\t{/list}\n\t</div>\n{/if}");
I$(207,function (_ut,_e,tpl,ListComponent,_,ScrollPush){
  var List = ListComponent.extend({
    template: tpl,
    data:{
    	list:[]
    },
    getListParam: function(){
        var param = _.extend({}, this.getExtraParam(this.data));
        delete param.tongji;//删除统计相关的参数
        return param;
    },
    url:'/recommend/getRecommendGoods.html',
    xdrOption:{
    	method:'POST',
    	norest:true,
    	type:'json'
    },
    onBodyScrollCheck:function(event){
    	var offset = _e._$offset(this.$root.parentNode,document.body);
    	var pageBox = _e._$getPageBox();
    	if(pageBox.scrollTop+pageBox.clientHeight>offset.y && !this.data.recommendSent){
        this.daPush();
    		this.data.recommendSent = true;
        var itemsArr = [];
        _ut._$forEach(this.data.list,function(item){
          itemsArr.push('{'+'"id":'+(item.goodsId||'')+',"recType":"'+(item.recType||'')+'","reason":"'+(item.reason||'')+'","weight":"'+(item.weight||'')+'"}');
        });
    		this.$request(this.printRecommendLog,{
    			data:{
    				userId:window.account||'',
    				date:+new Date,
    				position:this.data.condition.tongji.position||'商品详情页面：相关推荐（DETAIL）',
            items:"["+itemsArr.join(",")+"]",
    				resource:'挖掘组'
    			},
    			onload:function(){
    				
    			},
    			onerror:function(){
    				
    			}
    		})
    	}
    },
    daPush:function(){
      _.daEvent(this.data.condition.tongji.category||'推荐区域展示',this.data.condition.tongji.action||"我的优惠券",this.data.condition.tongji.lable||"猜你喜欢");
    },
    // 推荐商品点击统计事件 hzmating 20150802
    clickRecommendTj:function(index,goodsId,from){
    	
      var item = this.data.list[index] || {};
      if(!!event.target.getAttribute("hasClick")){
        return;
      }
      event.target.setAttribute("hasClick",1);
      this.$request(this.printRecommendLog,{
        data:{
          userId:window.account||"",
          date:+new Date,
          position:this.data.condition.tongji.position||'商品详情页面：相关推荐（DETAIL）',
          clickItem:'{'+'"id":'+(item.goodsId||'')+',"recType":"'+(item.recType||'')+'","reason":"'+(item.reason||'')+'","weight":"'+(item.weight||'')+'"}',
          resource:'挖掘组'
        },
        onload:function(){
          
        },
        onerror:function(){
          
        }
      })
    },
    // refresh:function(){
    //   this.__getList();
    // },
    __getList: function(){
        var data = this.data;
        var option = {
//        progress: true,
          data: this.getListParam(),
          onload: function(json){
        	if(json.retcode==200){
	            var result = json,
	              list = result.list||[];
	            _.mergeList(list, data.list,data.key||'id')
	
	            data.total = result.totalCount;
	            data.list = list;
              data.refreshIcon = "&#xe61a;";
              if(list.length == 0){
                this.__setParentHide();
              }
        	} else{
        		this.__setParentHide();
        	}
          },
          onerror: function(json){
            // @TODO: remove
            this.__setParentHide();
          }
        };
        if(this.xdrOption){
      	  _.extend(option, this.xdrOption);
        }
        if(option.norest&&!_ut._$isString(option.data)){
      	  option.data = _ut._$object2query(option.data);
        }
        if(option.method.toUpperCase()=='GET'){
      	  option.query = option.data ;
        }
        this.$request(this.data.url||this.url,option)
   },
   __setParentHide: function(){
    this.parentNode.style.display = 'none';
   },
      //绑定打点事件
      __bindDaPush: function () {
          var self = this, data = self.data, dapushParam = data.dapushParam;
          //无打点参数
          if(!dapushParam || !dapushParam.page) return;
          //准备参数
          var spec = {
              param: function () {
                  //获取商品id列表，作为打点请求参数
                  for(var i = 0, list = [], l = data.list.length; i < l; i++) {
                      list.push(data.list[i].goodsId);
                  }
                  return list;
              }
          };
          _.extend(spec, dapushParam);
          //绑定滚动打点事件
          ScrollPush._$allocate(spec);
      },
    config: function(data){
        _.extend(data, {
          total: 1,
          current: 1,
          limit: 20,
          list: []
        });

        if(!this.data.condition.tongji) {
          this.data.condition.tongji = {
            'category':'',
            'action':'',
            'lable':'',
            'position':'',
            'from':'',
            'query':''
          }
        }

        //绑定打点事件
        this.__bindDaPush();
        
        this.$watch(this.watchedAttr, function(){
          if(this.shouldUpdateList()) this.__getList();
        });
    }
  });
  
  return List;

},2,4,413,294,15,295);
I$(414,"{#if (list.length >= 5 && condition.tongji.from == 'detailphb') || list.length > 0}\n<h4>{condition.title || ''}</h4>\n<ul class=\"userBuyView\">\n\t{#list list as item}\n\t{#if (item_index + 1) <= (condition.limit || 5)}\n\t<li class=\"clearfix\" r-class=\"{{'bbNone': (item_index + 1) == (condition.limit || 5)}}\" on-click={this.clickRecommendTj(item_index,item.goodsId,condition.tongji.from)}>\n\n\t\t{#if condition.strategy == 'hotSale'}\n\t\t\t<b class='rank'>{item_index+1}</b>\n\t\t{/if}\n\n\t\t{#if item.memberCount && item.memberCount>0}\n\t\t\t<a class=\"aImg\" target=\"_blank\" href=\"/product/{item.goodsId}.html?{condition.tongji.query}{item.reason|encode}&istext=0\">\n\t\t\t\t<img border=\"0\" title=\"{item.memberCount}{item.memberUnitName || '件'}装 | {item.title}\" alt=\"{item.memberCount}{item.memberUnitName || '件'}装 | {item.title}\" src=\"{item.imageUrl|imgThumbnailUrl:158}\" style=\"opacity: 1;\">\n\t\t\t</a>\n\t\t{#else}\n\t\t\t<a class=\"aImg\" target=\"_blank\" href=\"/product/{item.goodsId}.html?{condition.tongji.query}{item.reason|encode}&istext=0\">\n\t\t\t\t<img border=\"0\" title=\"{item.title}\" alt=\"{item.title}\" src=\"{item.imageUrl|imgThumbnailUrl:158}\" style=\"opacity: 1;\">\n\t\t\t</a>\n\t\t{/if}\n\n\t\t{#if !!item.saleShow && condition.strategy == 'alsoView'}\n\t\t\t<p class=\"promotion\"><span title=\"{item.saleShow||''}\">{item.saleShow||''}</span></p>\n\t\t{/if}\n\n\t\t<p class=\"productTit\">\n\t\t\t<a class=\"aTit\" target=\"_blank\" title=\"{item.title}\" href=\"/product/{item.goodsId}.html?{condition.tongji.query}{item.reason|encode}&istext=1\">{item.title || ''}</a>\n\t\t</p>\n\n\t\t<div class=\"clearfix\">\n\t\t\t<p class=\"productPrice\"><span>¥{item.actualCurrentPrice}</span><del>¥{item.marketPrice}</del></p>\n\t\t\t<p class=\"commentCount\">\n\t\t\t\t<a href=\"/product/{item.goodsId}.html?{condition.tongji.query}{item.reason|encode}&istext=2#mainBtmWrap\" target=\"_blank\">{item.commentCount} 人已评价</a>\n\t\t\t</p>\n\t\t</div>\n\n\t</li>\n\t{/if}\n\t{/list}\n</ul>\n{/if}");
I$(208,function (_ut,_e,tpl,ListComponent,_,ScrollPush){
  var List = ListComponent.extend({
    template: tpl,
    data:{
    	list:[]
    },
    getListParam: function(){
        var param = _.extend({}, this.getExtraParam(this.data));
        delete param.tongji;//åˆ é™¤ç»Ÿè®¡ç›¸å…³çš„å‚æ•°
        return param;
    },
    url:'/recommend/getRecommendGoods.html',
    xdrOption:{
    	method:'POST',
    	norest:true,
    	type:'json'
    },
    onBodyScrollCheck:function(event){
    	var offset = _e._$offset(this.$root.parentNode,document.body);
    	var pageBox = _e._$getPageBox();
    	if(pageBox.scrollTop+pageBox.clientHeight>offset.y && !this.data.recommendSent){
        this.daPush();
    		this.data.recommendSent = true;
        var itemsArr = [];
        _ut._$forEach(this.data.list,function(item){
          itemsArr.push('{'+'"id":'+(item.goodsId||'')+',"recType":"'+(item.recType||'')+'","reason":"'+(item.reason||'')+'","weight":"'+(item.weight||'')+'"}');
        });
    		this.$request(this.printRecommendLog,{
    			data:{
    				userId:window.account||'',
    				date:+new Date,
    				position:this.data.condition.tongji.position||'å•†å“è¯¦æƒ…é¡µé¢ï¼šç›¸å…³æŽ¨èï¼ˆDETAILï¼‰',
            items:"["+itemsArr.join(",")+"]",
    				resource:'æŒ–æŽ˜ç»„'
    			},
    			onload:function(){
    				
    			},
    			onerror:function(){
    				
    			}
    		})
    	}
    },
    daPush:function(){
      _.daEvent(this.data.condition.tongji.category||'æŽ¨èåŒºåŸŸå±•ç¤º',this.data.condition.tongji.action||"å•†å“è¯¦æƒ…é¡µ",this.data.condition.tongji.lable||"ä¹°äº†åˆä¹°");
    },
    // æŽ¨èå•†å“ç‚¹å‡»ç»Ÿè®¡äº‹ä»¶ hzmating 20150802
    clickRecommendTj:function(index,goodsId,from){
    	
      var item = this.data.list[index] || {};
      if(!!event.target.getAttribute("hasClick")){
        return;
      }
      event.target.setAttribute("hasClick",1);
      this.$request(this.printRecommendLog,{
        data:{
          userId:window.account||"",
          date:+new Date,
          position:this.data.condition.tongji.position||'å•†å“è¯¦æƒ…é¡µé¢ï¼šç›¸å…³æŽ¨èï¼ˆDETAILï¼‰',
          clickItem:'{'+'"id":'+(item.goodsId||'')+',"recType":"'+(item.recType||'')+'","reason":"'+(item.reason||'')+'","weight":"'+(item.weight||'')+'"}',
          resource:'æŒ–æŽ˜ç»„'
        },
        onload:function(){
          
        },
        onerror:function(){
          
        }
      })
    },
    // refresh:function(){
    //   this.__getList();
    // },
    __getList: function(){
        var data = this.data;
        var option = {
//        progress: true,
          data: this.getListParam(),
          onload: function(json){
        	if(json.retcode==200){
	            var result = json,
	              list = result.list||[];
	            _.mergeList(list, data.list,data.key||'id')
	
	            data.total = result.totalCount;
	            data.list = list;
              data.refreshIcon = "&#xe61a;";
              if(list.length == 0){
                this.__setParentHide();
              }
        	} else{
        		this.__setParentHide();
        	}
          },
          onerror: function(json){
            // @TODO: remove
            this.__setParentHide();
          }
        };
        if(this.xdrOption){
      	  _.extend(option, this.xdrOption);
        }
        if(option.norest&&!_ut._$isString(option.data)){
      	  option.data = _ut._$object2query(option.data);
        }
        if(option.method.toUpperCase()=='GET'){
      	  option.query = option.data ;
        }
        this.$request(this.data.url||this.url,option)
   },
   __setParentHide: function(){
    this.parentNode.style.display = 'none';
   },
      //ç»‘å®šæ‰“ç‚¹äº‹ä»¶
      __bindDaPush: function () {
          var self = this, data = self.data, dapushParam = data.dapushParam;
          //æ— æ‰“ç‚¹å‚æ•°
          if(!dapushParam || !dapushParam.page) return;
          //å‡†å¤‡å‚æ•°
          var spec = {
              param: function () {
                  //èŽ·å–å•†å“idåˆ—è¡¨ï¼Œä½œä¸ºæ‰“ç‚¹è¯·æ±‚å‚æ•°
                  for(var i = 0, list = [], l = data.list.length; i < l; i++) {
                      list.push(data.list[i].goodsId);
                  }
                  return list;
              }
          };
          _.extend(spec, dapushParam);
          //ç»‘å®šæ»šåŠ¨æ‰“ç‚¹äº‹ä»¶
          ScrollPush._$allocate(spec);
      },
    config: function(data){
        _.extend(data, {
          total: 1,
          current: 1,
          limit: 20,
          list: []
        });

        if(!this.data.condition.tongji) {
          this.data.condition.tongji = {
            'category':'',
            'action':'',
            'lable':'',
            'position':'',
            'from':'',
            'query':''
          }
        }

        //ç»‘å®šæ‰“ç‚¹äº‹ä»¶
        this.__bindDaPush();
        
        this.$watch(this.watchedAttr, function(){
          if(this.shouldUpdateList()) this.__getList();
        });
    }
  });
  
  return List;

},2,4,414,294,15,295);
I$(590,function (NEJ,_k,_u,_t0,_p,_o,_f,_r){
    // variable declaration
    var _pro;
    /**
     * çº¿æ€§åŠ¨ç”»
     * 
     * ç»“æž„ä¸¾ä¾‹
     * ```html
     * <div id='id-bounce1'></div>
     * ```
     * 
     * è„šæœ¬ä¸¾ä¾‹
     * ```javascript
     * NEJ.define([
     *     'util/animation/linear'
     * ],function(_t){
     *     // åˆ›å»ºåŠ¨ç”»å®žä¾‹
     *     var _linear  = _t._$$AnimLinear._$allocate({
     *         from:{
     *             offset:100
     *         },
     *         to:{
     *             offset:200
     *         },
     *         duration:1000,
     *         onupdate:function(_event){
     *             _box.style.left = _event.offset + 'px';
     *         },
     *         onstop:function(){
     *             this._$recycle();
     *         }
     *     });
     *     // å¼€å§‹åŠ¨ç”»
     *     _linear._$play();
     * });
     * ```
     * 
     * @class   module:util/animation/linear._$$AnimLinear
     * @extends module:util/animation/bezier._$$AnimBezier
     * 
     * @param   {Object} config - å¯é€‰é…ç½®å‚æ•°
     */
    _p._$$AnimLinear = _k._$klass();
    _pro = _p._$$AnimLinear._$extend(_t0._$$AnimBezier);
    /**
     * æŽ§ä»¶é‡ç½®
     * 
     * @protected
     * @method module:util/animation/linear._$$AnimLinear#__reset
     * @param  {Object} arg0 - å¯é€‰é…ç½®å‚æ•°
     * @return {Void}
     */
    _pro.__reset = function(_options){
        _options = _u._$merge({},_options);
        _options.timing = 'linear';
        this.__super(_options);
    };

    if (CMPT){
        NEJ.copy(NEJ.P('nej.ut'),_p);
    }

    return _p;
},220,1,2,96);
I$(606,"{#if !!content}\n  {#include content}\n{#else}\n<div class=\"m-dlgcont {inclazz}\">\n  <p class=\"title\">\n    {#if iconType}\n      <i class=\"iconfont main-icon icon\" r-style=\"{{color: iconType[1]}}\" r-html=\"{iconType[0]}\"></i>\n    {/if}\n    {#include descOne}\n  </p>\n  <p class=\"desc\">{#include descTwo}</p>\n</div>\n{/if}");
I$(435,function (AnimateDialog, _ut, _tpl) {
  /*
    å‚æ•°ï¼š
      ä¾¿æ·çš„æç¤ºå¼¹çª—
        icon: yes/notice/fail/forbid å›¾æ ‡
        descOne: ç¬¬ä¸€è¡Œæ–‡æ¡ˆï¼ˆå¤§ï¼Œå¯ä¼ htmlç»“æž„ï¼‰
        descTwo: ç¬¬äºŒè¡Œæ–‡æ¡ˆï¼ˆå°ï¼Œå¯ä¼ htmlç»“æž„ï¼‰
      å®Œå…¨è‡ªå®šä¹‰ï¼š
        contentï¼šhtmlç»“æž„

    å…¶ä»–å‚æ•°å‚è€ƒï¼š'pro/components/dialog/confirm/index' ç»„ä»¶
      width, height, clazz, txtOk, txtCC, hideOkBtn, hideCCBtn, onok, onclose, oncancel
   */
  var Dialog = AnimateDialog.extend({
    data: {msg: _tpl},
    config: function (data) {
      this.supr(data);
      this.__addIcon(data);
      this.__initClazz(data);
    },
    init: function (data) {
      this.supr(data);
      if(this.$root == this) this.$inject(document.body);
    },
    __addIcon: function (data) {
      var icons = {
        yes: ['&#xe612;', '#5DC540'],
        notice: ['&#xe609;', '#d22147'],
        fail: ['&#xe604;', '#d22147'],
        forbid: ['&#xe606;', '#d22147']
      };
      data.iconType = data.icon && icons[data.icon];
    },
    __initClazz: function (data) {
      data.clazz = data.clazz || '';
      if(!data.content){
        data.descOne = data.descOne || '';
        data.descTwo = data.descTwo || '';
        //判断是使用2行还是一行的显示格式，一行居中，两行左对齐
        var inclazz = 'm-dlgcont-c',
          clazz = 'm-dlgcontwrap-c';
        if (!!data.descTwo) {
          inclazz = 'm-dlgcont-l';
          clazz = 'm-dlgcontwrap-l';
        }
        data.clazz += (' ' + clazz);
        data.inclazz = inclazz;
      }
    }
  }).use('timeout');
  return Dialog;
},192,15,606);
I$(591,function (_k, _u, _v, _e, $, request, Module, _p, _o, _f, _r) {

    return {
      // 替换字符串中的部分文本
      // - exp：用正则匹配的文本
      // - newStr：替换为的字符串
      // - 正则参数，默认'g'（替换全部的匹配）
      'replacestr': function (str, exp, newStr, type) {
        return str.replace(new RegExp(exp, type || 'g'), newStr);
      },

      // 为url增加参数
      'addParam': function (url, k1, v1, k2, v2) {
        if(!url) return 'javascript:void(0);';
        function add(link, k, v){
          if(link.indexOf('?') > -1) {
            link = link.replace('?', '?' + k + '=' + v + '&');
          } else if(link.indexOf('#') > -1) {
            link = link.replace('#', '?' + k + '=' + v + '#');
          } else {
            link += '?' + k + '=' + v;
          }
          return link;
        }
        if(k1) url = add(url, k1, v1);
        if(k2) url = add(url, k2, v2);
        return url;
      },

      // 保留小数
      // - digit：保留小数位数
      // - isFill0：不足的位置是否补0
      // - frc：0 向下取、1 四舍五入(默认)、2 向上取
      'decimal': function (num, digit, isFill0, frc) {
        num = parseFloat(num);
        if(!num && num !== 0) return ''; // NaN（过滤）、0（不过滤）
        frc = frc === undefined ? 1 : frc;
        var ten = Math.pow(10, digit) || 1,
          mathFn = [Math.floor, Math.round, Math.ceil][frc],
          dcm, dcms;
        if(!_u._$isFunction(mathFn)) return '';
        dcm = mathFn(Math.round(num * ten * 10) / 10) / ten;
        if(!isFill0) {
          return dcm;
        } else {
          dcms = dcm + '';
          if(dcms.indexOf('.') == -1) {
            dcms += '.';
          }
          var tail = dcms.split('.')[1] || '',
            fillLen = digit - tail.length;
          if(fillLen > 0) {
            while(fillLen--) {
              dcms += '0';
            }
          }
          return dcms;
        }
      }
    };

  },1,2,3,4,25,6,5);
I$(415,function (_k, _ut, _, _v, _e, $, request, Module, _ani, _easeinout,
            Confirm, filter, BaseComponent,
            _p, _o, _f, _r) {

    return BaseComponent.extend({
      init: function (data) {
        var self = this;
        self.supr();

        // 限制初始化方法仅执行一次
        var once = false;

        // 数据初始化
        self.__initData && self.$timeout(self.__initData);
        self.$watch('asyncReady', function (ready) {
          if(once) return;
          if(!!ready) {
            once = true;
            // 异步数据初始化
            self.__asyncInitData && self.__asyncInitData(data);
          }
        });

        //// Array proto;
        //// regular.js中已包含：forEach、map、filter、indexOf，这补全 some、every
        //// 还少 reduce，但head.js 里引用了：util/es/platform/array.patch
        //_.extend(Array.prototype, {
        //  some: function (callback, context) {
        //    for(var i = 0, len = this.length; i < len; i++) {
        //      if(callback.call(context, this[i], i, this)) {
        //        return true;
        //      }
        //    }
        //    return false;
        //  },
        //  every: function (callback, context) {
        //    var res = true;
        //    for(var i = 0, len = this.length; i < len; i++) {
        //      if(!callback.call(context, this[i], i, this)) {
        //        res = false;
        //      }
        //    }
        //    return res;
        //  }
        //});

      },
      _$find: function (path) {
        var self = this, tar = self, tmp = self;
        path = path || '';
        Array.prototype.slice.apply(arguments || []).forEach(function (addPath, i) {
          if(i > 0 && !!addPath) {
            path += ('.' + (addPath || ''));
          }
        });
        path.split('.').some(function (s) {
          tar = tmp = tmp[s];
          if(tmp === undefined) {
            //throw new Error('找不到路径' + path + '下的对象');
            return true; // 等同于 break;
          }
        });
        return tar;
      },
      // 简单提示窗
      _$dialog: function (title, icon, desc1, desc2, btnstr, options) {
        var data = {
          title: title || '提示',
          icon: icon || '',
          descOne: desc1 || '',
          descTwo: desc2 || '',
          txtOk: btnstr || '确认',
          hideCCBtn: true,
          width: 520
        };
        _.extend(data, options, true);
        new Confirm({
          data: data
        });
      },
      _$easeInOut: function (from, to, dur, updateCb, stopCb, autoPlay /*默认：true*/) {
        var self = this;
        autoPlay = autoPlay === undefined;
        var ani = _easeinout._$$AnimEaseInOut._$allocate({
          from: {offset: from},
          to: {offset: to},
          duration: dur,
          onupdate: function (event) {
            updateCb && updateCb(event.offset);
            self.$update();
          },
          onstop: function () {
            stopCb && stopCb();
            this._$recycle();
            self.$update();
          }
        });
        !!autoPlay && ani._$play();
        return ani;
      },
      _$object2array: function (obj) {
        if(_ut._$isArray(obj)) return obj;
        var arr = [];
        for(var k in obj) {
          if(obj.hasOwnProperty(k)) {
            arr.push({
              key: k,
              value: obj[k]
            });
          }
        }
        return arr;
      },
      //_$deepClone: function (src, tar) {
      //  var self = this, isArr;
      //  tar = tar || {};
      //  isArr = _ut._$isArray(tar);
      //  self._$object2array(src).forEach(function (sub) {
      //    if(_ut._$isObject(sub.value)) {       // object
      //      tar[sub.key] = self._$deepClone(sub.value);
      //    } else if(_ut._$isArray(sub.value)) { // array
      //      self._$deepClone(sub.value, (tar[sub.key] = []));
      //    } else {                              // value
      //      if(isArr) {
      //        tar.push(sub);
      //      } else {
      //        tar[sub.key] = sub.value;
      //      }
      //    }
      //  });
      //  return tar;
      //},

      // 保留小数
      // - digit：保留小数位数
      // - isFill0：不足的位置是否补0
      _$decimal: function (num, digit, isFill0) {
        num = parseFloat(num);
        if(!num) return '';
        var ten = Math.pow(10, digit),
          dcm = Math.round(num * ten) / ten,
          dcms;
        if(!isFill0) {
          return dcm;
        } else {
          dcms = dcm + '';
          if(dcms.indexOf('.') == -1) {
            dcms += '.';
          }
          var tail = dcms.split('.')[1] || '',
            fillLen = digit - tail.length;
          if(fillLen > 0) {
            while(fillLen--) {
              dcms += '0';
            }
          }
          return dcms;
        }
      }

    }).use('timeout')
      .filter(filter);

  },1,2,15,3,4,25,6,5,590,185,435,591,156);
I$(416,"<div class=\"crumbs f-cb\">\n  <a href=\"{@(domainUrl)}\">网易考拉海购</a>&nbsp;&gt;&nbsp;<span class=\"ellipsis crumbs-title\">{@(goods.title)}</span>\n  {#if !!goods.shopInfo}\n    <span class=\"ellipsis m-shopname f-vama\">\n      {#if (goods.shopInfo.shopType||0)==1}\n        <b class=\"u-jxtag\"><i class=\"iconfont\" r-html=\"{'&#xe652;'}\"></i> 考拉精选</b>\n      {#else}\n        <i class=\"iconfont\" r-html=\"{'&#xe648;'}\"></i>\n      {/if}\n      <a target=\"_blank\" href=\"{@(goods.shopInfo.shopHref||'')}\" title=\"{@(goods.shopInfo.shopName||'')}\" class=\"name f-toe\">\n        {@(goods.shopInfo.shopName||'')}\n      </a>\n      <a class=\"link\" target=\"_blank\" href=\"{@(goods.shopInfo.shopHref)}\">进店看看&gt;</a>\n    </span>\n  {/if}\n</div>\n<div class=\"PInfoWrap clearfix\">\n\n  {! 图片模块 !}\n  <c_image c_image={_$components.c_image}></c_image>\n\n  <dl class=\"PInfo PInfo-standout\">\n    <dt class=\"PTags\">\n      {! 自营标识：自营且仓库ID不是10或15的商品 !}\n      {#if !!goods.self && goods.warehouse!=undefined && goods.warehouse.warehouseId!=10 && goods.warehouse.warehouseId!=15}\n        <i class=\"selftag tag\">自营</i>\n      {/if}\n      {! 跨境标识：0:直邮，1：保税，2：海淘 !}\n      {#if goods.importType!=undefined && (goods.importType==0 || goods.importType==1 || goods.importType==2)}\n        <i class=\"crosstag tag\">跨境</i>\n      {/if}\n    </dt>\n    {! 品牌国 !}\n    <dt class=\"orig-country\">\n      <img src=\"{@( (goods.originCountryFlag||'')|imgThumbnailUrl:48 )}\">\n      <span>{@(goods.originCountryName||'')}</span>\n      <span class=\"split\">|</span>\n      <a class=\"brand\" target=\"_blank\" href=\"{@(domainUrl||'/')}brand/{@(goods.brandId||'')}.html\">{@(goods.brandName||'')}</a>\n    </dt>\n    {! 商品名称及商品描述 !}\n    <dt class=\"product-title\">\n      {#if !!show.member.title}\n        <span class='member-lbl'>{show.member.title}</span>&ensp;|&ensp;\n      {/if}\n      <span r-html=\"{(goods.title||'')|replacestr:'\\\\s+','&nbsp;'}\"></span>\n    </dt>\n    {#if !!goods.subTitle}\n      <dt class=\"subTit\" r-html=\"{goods.subTitle|replacestr:'\\\\s+','&nbsp;'}\"></dt>\n    {/if}\n\n    {! 大促、秒杀、特卖&限时购，提示条 !}\n    <c_promotionbar\n      c_promotionbar={_$components.c_promotionbar}\n      show={_$components.c_promotionbar.show}\n      asyncReady={_$async.ready}\n      on-updatePromotionBar={this.updatePromotionBar($event)}\n      on-refreshTopBar={this.refreshTopBar()}>\n    </c_promotionbar>\n\n    {! 预售头部 !}\n    {#if !!show.preSaleInfo}\n    <dd class=\"m-yushou\">\n      <div class=\"m-yushou-cnt\">\n        <span class=\"m-yushou-t\">预售</span>\n        <span class=\"m-yushou-msg\">{show.preSaleInfo}</span>\n      </div>\n    </dd>\n    {/if}\n\n    {! 价格&促销标签区域 !}\n    <dd class=\"m-price-wrap\">\n\n      {! 价格行：价格、小标签、折扣、参考价、预售 !}\n      {#include pricetpl}\n\n      {! 手机秒杀、手机专享 !}\n      <c_toapp\n        c_toapp={_$components.c_toapp}\n        asyncReady={_$async.ready}></c_toapp>\n\n      {! 促销活动数据：考拉豆抵扣、优惠券 !}\n      {#include beancoupontpl}\n\n    </dd>\n\n    {! 活动标签 !}\n    <c_promotiontitle\n      c_promotiontitle={_$components.c_promotiontitle}\n      show={_$components.c_promotiontitle.show}\n      asyncReady={_$async.ready}\n      on-updatePromotionTitle={this.updatePromotionTitle($event)}></c_promotiontitle>\n\n    {! 税费提示 !}\n    {#include taxfeetpl}\n\n    {!\n      运费与服务栏\n      展示条件：未下架 & 不是非卖品\n    !}\n    {#if goods.onlineStatus!=0 && !goods.not4SaleGoods}\n      <dd class=\"postage\">\n        <span class=\"m-line-title\">运费</span>\n        <div class=\"msg\">\n          {! 如果是虚拟商品 不显示运费地址 !}\n          {#if goods.isVirtualGoods != 1}\n            {#if !!warehouseCityShow}<span class=\"from\">{warehouseCityShow}&ensp;</span>{/if}\n            <span class=\"from2\">è‡³</span>\n            <span class=\"toWrap\" on-click=\"{this.toggleAddrBox()}\" ref=\"addrTarget\">\n              <span class=\"to\" title=\"{show.addrMsg}\">{show.addrMsg && show.addrMsg.slice(0, 10) || 'è¯·é€‰æ‹©'}</span>\n              <span class=\"tri_down\" r-html=\"{'&#xe60f;'}\"></span>\n            </span>\n            {! åœ°å€æŽ§ä»¶ !}\n            <c_addrbox\n              c_addrbox={_$components.c_addrbox}\n              asyncReady={_$async.ready}\n              on-distselect={this.distSelect($event)}></c_addrbox>\n          {/if}\n          <span class=\"feeInfo\"> {! è¿è´¹ä¿¡æ¯ or é”™è¯¯æç¤º !}\n            <span class=\"feeTxt\" r-html=\"{show.postageMsg || ''}\"></span>\n          </span>\n        </div>\n\n      </dd>\n      {#if !goods.self} {! popåº—ï¼ˆéžè‡ªè¥ï¼‰ !}\n        <dd class=\"m-service f-cb\">\n          <span class=\"m-line-title f-fl\">æœåŠ¡</span>\n          <span class=\"send\">\n            æœ¬å•†å“ç”±&ensp;\n            {#if !!goods.shopInfo} {! popå•†å®¶ï¼ˆå·²å¼€åº—é“ºï¼‰ !}\n              <a class=\"shopname\" target=\"_blank\" href=\"{goods.shopInfo.shopHref||''}\" >{goods.shopInfo.shopName||''}</a>\n            {#else}                {! popå•†å®¶ï¼ˆæœªå¼€åº—é“ºï¼‰ !}\n              {goods.warehouse.warehouseNameAlias||''}\n            {/if}\n            &ensp;å‘è´§\n          </span>\n        </dd>\n      {#else} {! è‡ªè¥ !}\n        {! æœåŠ¡ï¼šæ¬¡æ—¥è¾¾ !}\n        <dd class=\"m-service f-cb\">\n          <span class=\"m-line-title f-fl\">æœåŠ¡</span>\n          <span class=\"send\">æœ¬å•†å“ç”±&ensp;è‡ªè¥{goods.warehouse.warehouseNameAlias||''}&ensp;å‘è´§</span>\n          <div class=\"tomorrowarr f-fc j-tomorrowArrival\" r-hide=\"{!show.tomorrowArrival.show}\">\n            <span class=\"m-line-title f-fl\">&ensp;</span>\n\n            {! ç¬¬äºŒå¤©è¾¾ !}\n            {#if show.tomorrowArrival.status == 1}\n            <span>æ‰€é€‰åœ°åŒºæ”¯æŒ</span>\n            <a target=\"_blank\" href=\"/footer/deliveryservice.shtml\" class=\"tomorrowIcon\"></a>\n            {/if}\n\n            {! ç¬¬ä¸‰å¤©è¾¾ !}\n            {#if show.tomorrowArrival.status == 2}\n            <span>çŽ°åœ¨è‡³æ˜Žå¤©</span>\n            {/if}\n\n            {#if show.tomorrowArrival.status != 4}\n            <span>{show.tomorrowArrival.divisionTimeStr || ''}</span>\n            <span>å‰å®Œæˆæ”¯ä»˜ï¼Œé¢„è®¡</span>\n            <span class=\"f-bold\">{show.tomorrowArrival.arrivalTimeStr || ''}</span>\n            <span>é€è¾¾</span>\n            {/if}\n\n            {! ç‰©æµæ—¶æ•ˆ-æµ·å¤–ä»“ !}\n            {#if show.tomorrowArrival.status == 4}\n            <span>{show.tomorrowArrival.arrivalTimeStr || ''}</span>\n            {/if}\n\n            {! è¯¦æƒ… !}\n            {#if show.tomorrowArrival.status == 1 || show.tomorrowArrival.status == 2}\n            <a target=\"_blank\" class=\"detail\" href=\"{domainUrl}footer/deliveryservice.shtml\">è¯¦æƒ…</a>\n            {/if}\n          </div>\n        </dd>\n      {/if}\n\n    {/if}\n\n    {! å‘è´§æé†’ !}\n    {#if goods.onlineNotice.text && goods.onlineNotice.contentType == 1}\n      <dd class=\"spring-fest-alert\">\n        <div class=\"alert-txt\" r-html=\"{goods.onlineNotice.text||''}\"></div>\n      </dd>\n    {/if}\n\n    {#if !!goods.not4SaleGoods} {! éžå–å“ !}\n      <dd class=\"f-mt20\">\n        <span class=\"btn-nogoods not4sale\">æœ¬å•†å“ä¸æ”¯æŒè´­ä¹°</span>\n      </dd>\n\n    {#elseif goods.onlineStatus != 1} {! å•†å“å·²ä¸‹æž¶ !}\n      <dd>\n        <div class=\"j-goodsnotonsale\">\n          <div class=\"buyBox noGoods not-on-sale\"></div>\n\n          {! å±•ç¤ºã€Œç§’æ€æœŸé—´ä¸æ”¯æŒè´­ç‰©è½¦ç»“ç®—(å¼‚æ­¥)ã€åŒ…ç¨Žå•†å“ã€ä¸æ”¯æŒé€€è´§ã€ä¸å¯ä½¿ç”¨ä¼˜æƒ åˆ¸ã€æç¤º !}\n          <c_goodstips\n            c_goodstips={c_goodstips}\n            asyncReady={asyncReady}></c_goodstips>\n\n        </div>\n      </dd>\n\n    {#elseif _$async.ready} {! å¼‚æ­¥æ•°æ®å·²åŠ è½½ !}\n\n      {#if show.newerGift.isNewerGift && show.newerGift.goodsForNewer} {! æ–°äººç¤¼ !}\n        <dd class=\"f-mt20\">\n          <a href=\"{show.newerGift.goodsForNewer.activityLink || 'javascript:void(0)'}\"\n             class=\"newerBtn\" target=\"_blank\">åŽ»æ´»åŠ¨é¡µé¢†å–</a>\n        </dd>\n\n      {#else} {! ç¼ºè´§ã€æœ‰è´§ !}\n        <dd class=\"buyBox j-skubox\" id=\"js_skuBox\"\n            r-class=\"{{'nosku': (goods.skuGoodsPropertyList || []).length == 0}}\">\n\n          {! skuå±žæ€§ !}\n          <c_skuprops\n            c_skuprops={_$components.c_skuprops}\n            asyncReady={_$async.ready}\n            on-selectSkuVid={this.selectSkuVid($event)}></c_skuprops>\n\n          <div>\n\n            {! è¡¨å• !}\n            <c_form\n              c_form={_$components.c_form}\n              show={show}\n              asyncReady={_$async.ready}\n              on-buyNow={this.buyNow($event)}\n              on-add2Cart={this.add2Cart($event)}\n              on-arrivalNotice={this.arrivalNotice($event)}\n              on-btnChange={this.btnChange($event)}></c_form>\n\n          </div>\n\n        </dd>\n      {/if}\n\n    {/if}\n\n    {! ç²¾åŽè¯„ä»· !}\n    {#if goods.onlineStatus == 1}\n      <c_excellentcomments\n        c_excellentcomments={_$components.c_excellentcomments}\n        on-scroll2Comment={this.scroll2Comment($event)}></c_excellentcomments>\n    {/if}\n\n  </dl>\n</div>\n\n{! æ¦œå•æ ‡è¯†å›¾-é€šæ  !}\n{#if rankGoods && !!goodsRanksTopSample && goodsRanksTopSample.markingRanksImageUrl}\n  <div class=\"bannerRankMark\">\n    {#if goodsRanksTopSample.pcLandingPageUrl}\n      <a href=\"{goodsRanksTopSample.pcLandingPageUrl|addParam:'zn','rank'}\" target=\"_blank\">\n        <img src=\"{(goodsRanksTopSample.markingRanksImageUrl||'')|imgThumbnailUrl:1090,80}\" alt=\"{goodsRanksTopSample.detailImageName||''}\">\n      </a>\n    {#elseif goodsRanksTopSample.ranksTopId}\n      <a href=\"/activity/ranksTop/ranksTopInfo.html?zn=rank&ranksTopId={goodsRanksTopSample.ranksTopId||''}\" target=\"_blank\">\n        <img src=\"{(goodsRanksTopSample.markingRanksImageUrl||'')|imgThumbnailUrl:1090,80}\" alt=\"{goodsRanksTopSample.detailImageName||''}\">\n      </a>\n    {#else}\n      <img src=\"{(goodsRanksTopSample.markingRanksImageUrl||'')|imgThumbnailUrl:1090,80}\" alt=\"{goodsRanksTopSample.detailImageName||''}\">\n    {/if}\n  </div>\n{! å¤§ä¿ƒæ ‡è¯†å›¾-é€šæ  !}\n{#elseif pSaleItem.goodsDetailBannerUrl}\n  <div class=\"bannerRankMark\">\n    {#if pSaleItem.promotionMainLink}\n    <a href=\"{pSaleItem.promotionMainLink|addParam:'rt','activity'}\" target=\"_blank\">\n      <img src=\"{(pSaleItem.goodsDetailBannerUrl||'')|imgThumbnailUrl:1090,80}\" alt=\"{pSaleItem.promotionTitle||''}\">\n    </a>\n    {#else}\n    <img src=\"{(pSaleItem.goodsDetailBannerUrl||'')|imgThumbnailUrl:1090,80}\" alt=\"{pSaleItem.promotionTitle||''}\">\n    {/if}\n  </div>\n{/if}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
I$(417,"<div class=\"m-price\">\n  <span class=\"m-line-title m-price-title j-price-title\">\n    {#if !!show.seckillPrice}\n      ç§’æ€ä»·\n    {#elseif !!show.proPrice}\n      æŠ¢è´­ä»·\n    {#elseif !!show.preSaleInfo}\n      é¢„å”®ä»·\n    {#else}\n      å”®ä»·\n    {/if}\n  </span>\n  <div class=\"m-price-cnt\">\n\n    {! ä»·æ ¼ !}\n    {#if _$async.ready} {! æ–°äººç¤¼éœ€è¦å¼‚æ­¥æ•°æ® !}\n      {#if !!goods.not4SaleGoods || show.newerGift.isNewerGift} {! éžå–å“ã€æ–°äººç¤¼ ä»·æ ¼å›ºå®šä¸º0 !}\n        <span class=\"PInfo_r currentPrice\">Â¥<span>0.00</span></span>\n      {#else}\n        <span class=\"PInfo_r currentPrice\">Â¥<span>{(show.seckillPrice||show.proPrice||show.currentPrice)|decimal:2,true}</span></span>\n      {/if}\n    {/if}\n\n    {! 标签 !}\n    {#if @(!!goods.not4SaleGoods)} {! 非卖品标签 !}\n      <span class=\"m-memberLabel\">非卖品</span>\n    {#else}\n    {! 虚拟组合商品 > 折扣，并且两者互斥 !}\n      {#if show.tagType == 1 && !!show.member && !!show.member.price}\n      <span class=\"m-memberLabel j-memberlabel\">\n        折合单<span class=\"unit\">{show.member.unit||'件'}</span> ¥<span class=\"fbold\">{show.member.price|decimal:2,false}</span>\n      </span>\n      {#elseif show.tagType == 2 && show.discount != null}\n      <span class=\"m-memberLabel\">{show.discount}折</span> {! 显示折扣 !}\n      {/if}\n    {/if}\n\n    {! 包邮标识 !}\n    {#if @(baoyouTipSwitch==1 && !!postageFree)}\n      <span class=\"m-memberLabel\">包邮</span>\n    {/if}\n\n    {! 参考价 !}\n    {#if show.marketPrice != null}\n    <span class=\"PInfo_r marketPrice addprice j-marketprice\">\n      参考价&nbsp;&nbsp;¥<span>{show.marketPrice|decimal:2,true}</span>\n    </span>\n    {/if}\n  </div>\n</div>");
I$(418,"{#if _$async.ready} {! 异步数据已加载 !}\n\n  {#if goods.isVirtualGoods != 1} {! 如果是虚拟商品 不显示税费提示 !}\n  <dd class=\"m-taxrateline f-cb m-taxrateline-2\">\n    <span class=\"m-line-title f-fl\">税费</span>\n\n    <div class=\"descwrap f-fl\">\n\n      {! 税费补贴，非卖品&新人礼与其他活动互斥 !}\n      {#if show.taxSubsidy && show.taxSubsidy.desc && !goods.not4SaleGoods && !show.newerGift.isNewerGift}\n      <div class=\"m-zd-prt subsidy\">\n        <span class=\"m-dp-prt-title\">税费补贴</span>\n        <span class=\"m-zd-prt-desc ellipsis\">\n          {#if !!show.taxSubsidy.link}\n            <a href=\"{show.taxSubsidy.link|addParam:'zn','title','zp','tax'}\" target=\"_blank\" r-html=\"{show.taxSubsidy.desc}\"></a>\n          {#else}\n            <span r-html=\"{show.taxSubsidy.desc}\"></span>\n          {/if}\n        </span>\n      </div>\n      {/if}\n\n      {! 税费信息 !}\n      <div class=\"taxmsg\">\n\n        {! 个人物品清关模式 会设置isTax为1 !}\n        {#if goods.isTax == 1}\n        <span><b class=\"warn\">【本商品包税】</b>无需额外交税</span>\n\n        {! 海淘模式（含POP商品） !}\n        {#elseif goods.importType == 2}\n        <span><b class=\"warn\">【本商品包税】</b>若配送期间产生税费，请联系客服报销</span>\n\n        {! 一般贸易模式  含POP商品,不含POP虚拟商品 !}\n        {#elseif goods.importType == 3}\n        <span><b class=\"warn\">【本商品包税】</b>无需额外交税</span>\n\n        {#else}\n        预估￥<b>{(show.taxFeeMsg.goodsTaxAmount||0)|decimal:2,false,2}</b>，实际税费请以提交订单时为准\n        <span class=\"skutaxdesc\">\n          <span class=\"maintext\">\n            税费收取规则\n            <span class=\"tri_up iconfont\" r-html=\"{'&#xe610;'}\"></span>\n            <span class=\"tri_down iconfont\" r-html=\"{'&#xe60f;'}\"></span>\n          </span>\n          <span class=\"desc\">\n          {#if show.taxFeeMsg.isSpecificDutyGoods}\n            税费=增值税*70%+消费税*70%+关税（0）<br>\n            优惠券抵扣金额、商品运费均需要计税<br>\n            本品适用从量计征进口环节消费税，<a href=\"{domainUrl}footer/tariff.shtml?zn=title#Q5\" target=\"_blank\">了解规则</a>\n          {#else}\n            <a href=\"{domainUrl}footer/tariff.shtml#Q4\" target=\"_blank\">税费=购买单价 * 件数 * 税负率</a><br>\n            优惠券抵扣金额、商品运费均需要计税<br>\n            注：不同商品的适用税负率不同，<a href=\"{domainUrl}footer/pricelist.shtml\" target=\"_blank\">了解税率</a>\n          {/if}\n          </span>\n        </span>\n        {/if}\n\n      </div>\n\n    </div>\n\n  </dd>\n  {/if}\n\n{/if}");
I$(419,"{#if _$async.ready} {! 异步数据已加载 !}\n\n{! 非卖品、新人礼（与其他活动互斥） !}\n{#if !goods.not4SaleGoods && !show.newerGift.isNewerGift}\n\n  {! 促销活动数据：考拉豆抵扣、优惠券 !}\n  <div class=\"m-couponkaolabean f-cb\">\n    {! 考拉豆抵扣 !}\n    {#if show.kaolaBean}\n    <div class=\"line mb5 f-cb\">\n      <div class=\"icon bean f-fl\"></div>\n      <div class=\"desc f-fl\">\n        {#if show.kaolaBean.link}\n        <a class=\"li ellipsis\" href=\"{show.kaolaBean.link|addParam:'zn','title','zp','promotion'}\" r-html=\"{show.kaolaBean.desc}\"></a>\n        {#else}\n        <span class=\"li ellipsis\" r-html=\"{show.kaolaBean.desc}\"></span>\n        {/if}\n      </div>\n    </div>\n    {/if}\n\n    {! 优惠券 !}\n    {#if show.coupon && (show.coupon.couponList || []).length}\n    <div class=\"couponwrap\">\n      <div class=\"line f-cb\" r-hide=\"{!show.coupon.showAll}\">\n        <div class=\"desc f-fl\"></div>\n      </div>\n      <div class=\"line f-cb\" r-class=\"{{'z-showall': show.coupon.showAll}}\"\n           on-mouseenter=\"{this.showCouponEnter(show.coupon, show.coupon.couponList.length > 1)}\"\n           on-mouseleave=\"{this.showCouponLeave(show.coupon)}\">\n        <div class=\"icon coupon f-fl\"></div>\n        <div class=\"desc f-fl\">\n          {#list show.coupon.couponList as cp}\n          {#if !!cp.tipTitleLink}\n          <a class=\"li ellipsis\" href=\"{cp.tipTitleLink|addParam:'zn','title','zp','promotion'}\" target=\"_blank\">{cp.tipTitle}</a>\n          {#elseif !!cp.tipTitle}\n          <span class=\"li ellipsis\">{cp.tipTitle}</span>\n          {/if}\n          {#if !!cp.redeemCode}\n          <a class=\"getcoupon\" on-click='{this.getCoupon({schemeId:cp.redeemCode})}' href=\"javascript:void(0);\">点击领取</a>\n          {/if}\n          <br>\n          {/list}\n        </div>\n        {#if show.coupon.couponList.length > 1}\n              <span class=\"toggle\">\n                全部<i class=\"num\">{show.coupon.couponList.length}</i>张优惠券\n                <i class=\"iconfont up\" r-html=\"{'&#xe624;'}\" r-hide=\"{!show.coupon.showAll}\"></i>\n                <i class=\"iconfont down\" r-html=\"{'&#xe61e;'}\" r-hide=\"{show.coupon.showAll}\"></i>\n              </span>\n        {/if}\n      </div>\n    </div>\n    {/if}\n  </div>\n\n{/if}\n\n{/if}");
I$(592,"<div class=\"PImgBox m-productimgbox\">\n  <a on-click=\"{this.prev()}\" href=\"javascript:void(0);\" class=\"scrollBtn scrollleft sign\"\n     r-class=\"{{'scrollDis': scrollIndex <= 0}}\" hidefocus=true r-html=\"{'&#xe623;'}\"></a>\n  <a on-click=\"{this.next()}\" href=\"javascript:void(0);\" class=\"scrollBtn scrollRight sign\"\n     r-class=\"{{'scrollDis': scrollIndex >= c_image.goods.goodsImageList.length-4}}\" hidefocus=true r-html=\"{'&#xe61f;'}\"></a>\n  <div class=\"litimg_box\">\n    <ul id=\"litimgUl\" class=\"clearfix\" r-style=\"{{'left':imgListLeftS,'width':imgListWidth}}\">\n      {#list c_image.goods.goodsImageList as gi}\n      <li r-class=\"{{'active': c_image.selectIndex == gi_index}}\"\n        on-mouseenter=\"{this.enterli(gi_index)}\">\n        <a href=\"javascript:;\"><img src=\"{@(gi.imageUrl|imgThumbnailUrl:64)}\" alt=\"{@(c_image.goods.title)}\"/></a></li>\n      {/list}\n    </ul>\n  </div>\n  <div ref=\"imgwrap\"\n       on-mouseenter=\"{this.enter($event)}\"\n       on-mousemove=\"{this.move($event)}\"\n       on-mouseleave=\"{this.leave($event)}\"\n       id=\"showImgBox\">\n    {! 榜单标识图 !}\n    {#if @(!!c_image.rankGoods && !!c_image.goodsRanksTopSample && !!c_image.goodsRanksTopSample.pcDetailRanksImageUrl)}\n    <div class=\"rankMark j-rankMark\">\n      <img src=\"{@(c_image.goodsRanksTopSample.pcDetailRanksImageUrl|imgThumbnailUrl:120)}\" alt=\"{@(c_image.goodsRanksTopSample.detailImageName||'')}\">\n    </div>\n    {/if}\n    <img src=\"{c_image.bigImg|imgThumbnailUrl:400}\" alt=\"{@(c_image.goods.title)}\"/>\n    {#if !!c_image.kuaJingGou}<span class=\"ningbokjg\"></span>{/if}\n    <b class=\"shadow\" r-hide=\"{!shadowShow}\" r-style=\"{{'top':shadowTop,'left':shadowLeft}}\"></b>\n  </div>\n  <a href=\"{c_image.bigImg|imgThumbnailUrl:800}\" class=\"showLocalImg sign\" id=\"showLocalImg\" target=\"_blank\" title=\"查看大图\" hidefocus=true r-html=\"{'&#xe620;'}\"></a>\n  <div id=\"showDetails\" r-hide=\"{!shadowShow}\">\n    <img r-style=\"{{'top':shadowTop2,'left':shadowLeft2}}\"\n      src=\"{c_image.bigImg|imgThumbnailUrl:800}\" id=\"showImgBig\" alt=\"{@(c_image.goods.title)}\"/>\n  </div>\n</div>\n");
I$(420,function (_k, _ut, _v, _, _e, $, request, Module, _ani,
            DetailComponent, imagetpl, // regualr
            _p, _o, _f, _r) {

    return DetailComponent.extend({
      template: imagetpl,
      init: function (data) {
        var self = this;
        self.supr();
      },
      //数据初始化
      __initData: function () {
        var self = this, data = self.data,
          c_image = data.c_image,
          goods = c_image.goods;

        var images = goods.goodsImageList || [];

        //首图
        var firstImg;
        if(!!images.length && !!images[c_image.selectIndex || 0]) {
          firstImg = images[c_image.selectIndex || 0].imageUrl || '';
        } else {
          firstImg = goods.imageUrl || '';
        }

        //主图（默认为首图）
        c_image.bigImg = firstImg;

        // 发现ie8下r-style中使用加号报错
        data.shadowTop = 0;
        data.shadowTop2 = 0;
        data.shadowLeft = 0;
        data.shadowLeft2 = 0;

        data.imgListLeft = 0;
        data.imgListLeftS = '0px';
        data.imgListWidth = (images.length * 80) + 'px';

        //小图片滚动位置
        data.scrollIndex = 0;
        data.__playing = false;

        //榜单标识图打点
        self.__rankGoodsDaEvent(c_image);

      },
      //获取事件位置
      __getPos: function ($event) {
        $event = $event.event || $event;
        var target = this.$refs.imgwrap || $event.currentTarget;
        if(!target) return;
        var rect = target.getBoundingClientRect();
        return {x: $event.clientX - rect.left, y: $event.clientY - rect.top};
      },
      //设置阴影方块
      __setShadow: function (pos, show, width, height) {
        var self = this, data = self.data;
        data.shadowShow = show || false;
        if(!show) return;
        var sw = 200, sh = 200,
          sw2 = sw / 2, sh2 = sh / 2,
          w = width || 400, h = height || 400,
          cl = pos.x, ct = pos.y;
        if(cl - sw2 < 0) cl = sw2;
        if(cl + sw2 > w) cl = w - sw2;
        if(ct - sh2 < 0) ct = sh2;
        if(ct + sh2 > h) ct = h - sh2;
        data.shadowTop = (ct - sh2) + 'px';
        data.shadowTop2 = (-2 * (ct - sh2)) + 'px';
        data.shadowLeft = (cl - sw2) + 'px';
        data.shadowLeft2 = (-2 * (cl - sw2)) + 'px';
      },
      //操作
      enter: function ($event) {
        _v._$stop();
        var self = this,
          pos = self.__getPos($event);
        self.__setShadow(pos, true);
      },
      move: function ($event) {
        _v._$stop();
        var self = this,
          pos = self.__getPos($event);
        self.__setShadow(pos, true);
      },
      leave: function ($event) {
        _v._$stop();
        var self = this;
        self.__setShadow({}, false);
      },
      // hover小图
      enterli: function (index) {
        _v._$stop();
        var self = this, data = self.data,
          c_image = data.c_image,
          goods = c_image.goods,
          img = goods.goodsImageList[index];
        if(!img.imageUrl) return;
        c_image.bigImg = img.imageUrl;
        c_image.selectIndex = index;
      },
      // 小图列表滚动
      next: function () {
        var self = this, data = self.data,
          c_image = data.c_image,
          goods = c_image.goods,
          images = goods.goodsImageList || [],
          oldL = data.imgListLeft;
        if(data.scrollIndex >= images.length-4 || data.__playing){
          return;
        }
        data.__playing = true;
        var ani = _ani._$$AnimLinear._$allocate({
          from: {offset: 0},
          to: {offset: -80},
          duration: 300,
          onupdate: function (param) {
            data.imgListLeft = oldL + param.offset;
            data.imgListLeftS = data.imgListLeft + 'px';
            self.$update();
          },
          onstop: function () {
            data.scrollIndex++;
            data.__playing = false;
            self.$update();
            this._$recycle(ani);
          }
        });
        ani._$play();
      },
      prev: function () {
        var self = this, data = self.data,
          oldL = data.imgListLeft;
        if(data.scrollIndex <= 0 || data.__playing){
          return;
        }
        data.__playing = true;
        var ani = _ani._$$AnimLinear._$allocate({
          from: {offset: 0},
          to: {offset: 80},
          duration: 300,
          onupdate: function (param) {
            data.imgListLeft = oldL + param.offset;
            data.imgListLeftS = data.imgListLeft + 'px';
            self.$update();
          },
          onstop: function () {
            data.scrollIndex--;
            data.__playing = false;
            self.$update();
            this._$recycle(ani);
          }
        });
        ani._$play();
      },
      // 榜单标识图打点
      __rankGoodsDaEvent: function (c_image) {
        if(!!c_image.rankGoods &&
          !!c_image.goodsRanksTopSample &&
          !!c_image.goodsRanksTopSample.pcDetailRanksImageUrl &&
          !!c_image.rankGoodsDaEvent)
        _.daEvent(c_image.rankGoodsDaEvent);
      },
      //销毁
      destroy: function () {
        this.supr();
      }
    }).use('timeout');

  },1,2,3,15,4,25,6,5,590,415,592);
I$(593,"{#if !!asyncReady && !!show}\n\n  {! 秒杀 !}\n  {#if show.type == 0}\n  <dd class=\"m-xianshi\">\n    <div class=\"m-xianshi-cnt\"\n         r-class=\"{{\n          'xianshi-blue':show.step<5, 'xianshi-red':show.step==5, 'xianshi-grey':show.step>5 ,'xianshi-counting':show.step==4||show.step==5\n         }}\">\n      <div class=\"m-xianshi-banner fl\">\n        <span class=\"left-circle\"></span><span class=\"u-title\">秒杀</span><span class=\"u-split\">|</span><span class=\"u-desc\" r-html=\"{show.promotionTitle}\"></span><span class=\"right-circle\"></span>\n      </div>\n      {#if show.step <= 3}\n      <div class=\"u-xianshi-counter fl\">\n        秒杀价<span class=\"price\">￥{show.price|decimal:2,false}</span>\n        ，该商品将于<span class=\"time\">{show.showTime || ''}</span>开始秒杀\n        <a href=\"javascript:void(0)\" class=\"xianshi-link\" on-click=\"{this.remindSeckill(show)}\">\n          <span>设置开抢提醒</span>\n          <span class=\"u-dots fr\">\n            <i class=\"dot1\"></i><i class=\"dot2\"></i><i class=\"dot3\"></i><i class=\"dot4\"></i><i class=\"dot5\"></i>\n          </span>\n        </a>\n      </div>\n      {#elseif show.step == 4}\n      <div class=\"u-xianshi-counter fl\">\n        秒杀价<span class=\"price\">￥{show.price|decimal:2,false}</span>\n        ，该商品将于<span class=\"num min\">{show.timer3.min || '00'}</span>分\n        <span class=\"num sec\">{show.timer3.sec || '00'}</span>秒\n        <span class=\"num milsec\">{show.timer3.milsec || '0'}</span>后开始秒杀\n      </div>\n      {#elseif show.step == 5}\n      <div class=\"u-xianshi-counter fl\">\n        该商品距秒杀结束还剩：\n        {#if !show.timer4.dayHide}\n        <span class=\"num day\">{show.timer4.day || '00'}</span><span class=\"dayw\">天</span>\n        {/if}\n        <span class=\"num hour\">{show.timer4.hour || '00'}</span>时\n        <span class=\"num min\">{show.timer4.min || '00'}</span>分\n        <span class=\"num sec\">{show.timer4.sec || '00'}</span>秒\n        <span class=\"num milsec\">{show.timer4.milsec || '0'}</span>\n      </div>\n      {#elseif show.step == 6}\n      <div class=\"u-xianshi-counter fl\">\n        您来晚啦！秒杀已结束\n        {#if !!show.pcLandingPage}\n        <div class=\"j-seckill-landingPage\">\n          <a href=\"{show.pcLandingPage || 'javascript:void(0)'}\" class=\"other-seckills\" target=\"_blank\">\n          <span>围观其他秒杀活动</span>\n            <span class=\"u-dots fr\">\n              <i class=\"dot1\"></i><i class=\"dot2\"></i><i class=\"dot3\"></i><i class=\"dot4\"></i><i class=\"dot5\"></i>\n            </span>\n          </a>\n        </div>\n        {/if}\n      </div>\n      {/if}\n    </div>\n  </dd>\n\n  {! 特卖&限时购 !}\n  {#elseif show.type == 1}\n  <dd class=\"m-xianshi\">\n    <div class=\"m-xianshi-cnt\"\n         r-class=\"{{\n          'xianshi-blue':show.step<5, 'xianshi-red':show.step==5, 'xianshi-grey':show.step>5 ,'xianshi-counting':show.step==4||show.step==5\n         }}\">\n      <div class=\"m-xianshi-banner fl\">\n        <span class=\"left-circle\"></span>{#if !!show.title}<span class=\"u-title\" r-html=\"{show.title}\"></span><span class=\"u-split\">|</span>{/if}<span class=\"u-desc\" r-html=\"{show.msg}\"></span><span class=\"right-circle\"></span>\n      </div>\n      {#if show.step <= 3}\n      <div class=\"u-xianshi-counter fl\">\n        抢购价<span class=\"price\">￥{show.price|decimal:2,true}</span>\n        ，该商品将于<span class=\"time\">{show.showTime}</span>开始抢购\n        {#if !!show.tabId && show.step < 3 && !!show.remindStr}<a href=\"javascript:void(0)\" class=\"remind\" on-click=\"{this.remindSeckill(show)}\">{show.remindStr}</a>{/if}\n        {#if !!show.linkMsg && !!show.linkUrl}\n        <a href=\"{show.linkUrl|addParam:'zn','title'}\" class=\"xianshi-link\" target=\"_blank\">\n          <span>{show.linkMsg}</span>\n          <span class=\"u-dots fr\">\n            <i class=\"dot1\"></i><i class=\"dot2\"></i><i class=\"dot3\"></i><i class=\"dot4\"></i><i class=\"dot5\"></i>\n          </span>\n        </a>\n        {/if}\n      </div>\n      {#elseif show.step == 4}\n      <div class=\"u-xianshi-counter fl\">\n        抢购价<span class=\"price\">￥{show.price|decimal:2,true}</span>\n        ，该商品将于<span class=\"num min\">{show.timer3.min || '00'}</span>分\n        <span class=\"num sec\">{show.timer3.sec || '00'}</span>秒\n        <span class=\"num milsec\">{show.timer3.milsec || '0'}</span>后开始抢购\n        {#if !!show.linkMsg && !!show.linkUrl}\n        <a href=\"{show.linkUrl|addParam:'zn','title'}\" class=\"xianshi-link\" target=\"_blank\">\n          <span>{show.linkMsg}</span>\n          <span class=\"u-dots fr\">\n            <i class=\"dot1\"></i><i class=\"dot2\"></i><i class=\"dot3\"></i><i class=\"dot4\"></i><i class=\"dot5\"></i>\n          </span>\n        </a>\n        {/if}\n      </div>\n      {#elseif show.step == 5}\n      <div class=\"u-xianshi-counter fl\">\n        该商品距结束还剩：\n        {#if !show.timer4.dayHide}\n        <span class=\"num day\">{show.timer4.day || '00'}</span><span class=\"dayw\">天</span>\n        {/if}\n        <span class=\"num hour\">{show.timer4.hour || '00'}</span>时\n        <span class=\"num min\">{show.timer4.min || '00'}</span>分\n        <span class=\"num sec\">{show.timer4.sec || '00'}</span>秒\n        <span class=\"num milsec\">{show.timer4.milsec || '0'}</span>\n        {#if !!show.linkMsg && !!show.linkUrl}\n        <a href=\"{show.linkUrl|addParam:'zn','title'}\" class=\"xianshi-link\" target=\"_blank\">\n          <span>{show.linkMsg}</span>\n          <span class=\"u-dots fr\">\n            <i class=\"dot1\"></i><i class=\"dot2\"></i><i class=\"dot3\"></i><i class=\"dot4\"></i><i class=\"dot5\"></i>\n          </span>\n        </a>\n        {/if}\n      </div>\n      {/if}\n    </div>\n  </dd>\n\n  {! 大促 !}\n  {#elseif show.type == 2 && !show.isHide}\n  <dd class=\"m-promotionbar\" r-class=\"{{'m-promotionbar-pre': !!show.notBegin}}\">\n    <a class=\"link\" href=\"{show.promotionMainLink|addParam:'rt','activity'}\" target=\"_blank\">\n      <img class=\"main fl\" src=\"{ (show.detailsImageUrl || '')|noProtocol }\">\n      <span class=\"slogan fl\">{show.promotionTitle || ''}</span>\n      <span class=\"rightic u-dots fr\">\n        <i class=\"dot1\"></i><i class=\"dot2\"></i><i class=\"dot3\"></i><i class=\"dot4\"></i><i class=\"dot5\"></i>\n      </span>\n      {#if show.price != null}\n      <span class=\"price pre fr\">预告价：¥<i>{show.price|decimal:2,true}</i></span>\n      {#elseif show.beginPrice != null && show.endPrice != null}\n      <span class=\"price pre fr\">预告价：¥<i>{show.beginPrice|decimal:2,true}-{show.endPrice|decimal:2,true}</i></span>\n      {/if}\n    </a>\n  </dd>\n  {/if}\n\n{/if}");
I$(421,function (_k, _ut, _, _v, _e, $, request, _j, Module, _ani,
            DetailComponent, promotionbar, SmsNotice, // regualr
            _p, _o, _f, _r) {

    return DetailComponent.extend({
      template: promotionbar,
      init: function (data) {
        var self = this;
        self.supr();
      },
      //数据初始化（异步）
      __asyncInitData: function () {
        var self = this, data = self.data,
          c_promotionbar = data.c_promotionbar || {},
          async = c_promotionbar.async, //异步数据
          asyncSkuList = async.titleData.skuPromotionList || [];

        //默认的提示条（未选择任何sku，或sku只有一个）
        c_promotionbar.defBars = [];
        //各个sku展示的促销
        c_promotionbar.skuList = [];

        // sku: {bars: [bar, bar...], skuId, skuVid}
        // bar: {type, step, ...}
        //  - type: '', // 促销类型：0秒杀、1特卖/限时购、2大促
        //  - step: 0 // 促销状态

        //页面初始时间
        c_promotionbar.pageLoad = +(new Date());

        //初始化 c_promotionbar.skuList
        asyncSkuList.forEach(function (sku) {
          c_promotionbar.skuList.push({
            skuId: sku.skuId,
            skuVid: sku.skuPropertyValueId4View,
            bars: []
          });
        });

        //将处理过的 秒杀、特卖/限时购、大促 数据放入 c_promotionbar
        self.__initSecTmData(async, self.__prepareSecData._$bind(self), 'seckillActivityGoods'); //准备 秒杀 数据
        self.__initSecTmData(async, self.__prepareTmData._$bind(self), 'temaiActivityView'); //准备 特卖/限时购 数据
        self.__initPromotion(async); //准备 大促 数据

        //排序
        c_promotionbar.defBars.sort(sortByType);
        c_promotionbar.skuList.forEach(function (sku) {
          sku.bars.sort(sortByType);
        });
        function sortByType(b1, b2) {
          return b1.type - b2.type;
        }

        //展示默认的提示条
        if(!c_promotionbar.defSkuVid) { //有默认选中的sku情况下，展示工作交给 changeSku 函数
          self.$emit('updatePromotionBar');
        }

      },
      // 开抢提醒：秒杀0、特卖1、限时购1
      remindSeckill: function (bar) {
        var self = this, data = self.data,
          c_promotionbar = data.c_promotionbar,
          goods = c_promotionbar.goods;

        // 秒杀0、特卖1、限时购1
        if(bar.type === 0 || bar.type === 1) {
          var notice = SmsNotice._$allocate({

            msg: "该商品将于*" + bar.showTime + "*开始秒抢，我们将在开抢前通过手机发送通知提醒您。",

            confirm: function (params) {
              //params:{phoneNum:短信通知手机号,appNotification:考拉客户端是否接收提醒}
              var temaiType = bar.temaiType || 0,// 特卖1，限时购2，都不是0
                url,
                requestData = {
                  method: 'GET',
                  type: 'json',
                  onload: function (json) {
                    if(json && isSuc(json)) {
                      notice._$successDialog();
                      return;
                    }
                    notice._$errorDialog();
                  },
                  onerror: function () {
                    notice._$errorDialog();
                  }
                };

              function isSuc(json) {
                var code = bar.type === 0 ? json.code : json.retcode;
                return (bar.type === 0 && code === 0) || // 秒杀
                  (bar.type === 1 && temaiType === 1 && code === 200) || // 特卖
                  (bar.type === 1 && temaiType === 2 && code === 200); // 限时购
              }
              // 特卖
              if(bar.type === 1 && temaiType === 1) {
                url = '/short/message/temai/temaiNotify.html';
                _.extend(params, {
                  goodsId: goods.goodsId,
                  tabId: bar.tabId
                });
              }
              // 限时购
              else if(bar.type === 1 && temaiType === 2) {
                url = '/short/message/onsale/seckillNotify.html';
                _.extend(params, {
                  goodsId: goods.goodsId,
                  tabId: bar.tabId,
                  price: bar.price,
                  startTime: bar.startTime
                });
              }
              // 秒杀
              else if(bar.type === 0) {
                url = '/short/message/seckill/notify.html';
                _.extend(params, {
                  goodsId: goods.goodsId
                });
              }
              else {
                notice._$errorDialog();
                return;
              }
              requestData.url = url;
              requestData.query = params;
              requestData.headers = {"X-Requested-With": 'XMLHttpRequest'};
              _j._$request(url, requestData);
            },
            //登录成功后，刷新头部工具栏
            refreshTopbar: function () {
              //登录成功后回调
              self.$emit("refreshTopBar");
            }
          })._$show();
        }
      },
      // 特卖1，限时购2，都不是0
      __hasTemaiOrXianshi: function (data) {
        var type = data.activityType || -1, // 9代表特卖类活动
          tag = data.activityTag || -1;     //20特卖，10或其他代表限时购活动
        if(type != 9) return 0;
        return tag == 20 ? 1 : 2;
      },
      // 准备 秒杀、特卖/限时购 数据
      __initSecTmData: function (async, prepareDataFn, attr) {
        var self = this, data = self.data,
          c_promotionbar = data.c_promotionbar,
          asyncSkuList = async.titleData.skuPromotionList || [],
          attrList = attr + 'List',
          defTm = async.titleData[attr], askus, bar;

        if(!defTm) return;

        bar = self.__dealData(defTm, prepareDataFn);
        !!bar && c_promotionbar.defBars.push(bar);

        if(!asyncSkuList || !asyncSkuList.length) return;

        c_promotionbar.skuList.forEach(function (sku) {
          askus = asyncSkuList.filter(function (asku) {
            return asku.skuId == sku.skuId && asku[attrList] && asku[attrList][0];
          });
          if(!!askus.length) {
            bar = self.__dealData(askus[0][attrList][0], prepareDataFn);
            !!bar && sku.bars.push(bar);
          }
        });
      },
      // 准备 大促 数据
      __initPromotion: function (async) {
        var self = this, data = self.data,
          c_promotionbar = data.c_promotionbar,
          pro = async.itemData.promotionSaleItem,
          priceList, askus, prices = [];

        if(!pro || !pro.dachuStartTime) return;

        var barTemp = {
            type: 2, //类型：大促
            dachuStartTime: pro.dachuStartTime, //: "2016-07-10 23:40:00",
            endTime: pro.endTime, //: "2016-07-29 20:07:07",
            detailsImageUrl: pro.detailsImageUrl, //: "http:\/\/haitao.nosdn4.127.net\/ipcb878k52_120_24.png",
            promotionMainLink: pro.promotionMainLink, //: "http:\/\/mail.qq.com",
            promotionTitle: pro.promotionTitle, //: "研究人员指出导致海平面",
            goodsFilterImageUrl: pro.goodsFilterImageUrl, //: "http:\/\/haitao.nos.netease.com\/ipfkh0f216_72_24.png",
            listImageUrl: pro.listImageUrl, //: "http:\/\/haitao.nosdn2.127.net\/ipcb8d1a43_72_48.png",
            startTime: pro.startTime, //: "2016-06-17 14:16:00",
            price: undefined
          }, bar;

        priceList = pro.skuPromotionPrePriceList || [];

        c_promotionbar.skuList.forEach(function (sku) {
          askus = priceList.filter(function (asku) {
            // asku.key->skuId, asku.value->price;
            return asku.key == sku.skuId;
          });
          bar = _.clone(barTemp);
          if(!!askus.length) { //有对应的预售价
            //bar = self.__deepClone(barTemp);
            bar.price = askus[0].value;
            prices.push(bar.price);
          }
          sku.bars.push(bar);
        });

        //bar = self.__deepClone(barTemp);
        bar = _.clone(barTemp);
        if(prices.length === 1) {
          bar.price = prices[0];
        } else {
          prices.sort(function (p1, p2) {
            return parseFloat(p1) - parseFloat(p2);
          });
          bar.beginPrice = prices[0];
          bar.endPrice = prices[prices.length - 1];
        }
        c_promotionbar.defBars.push(bar);
      },
      // 处理特卖/限时购数据
      /*
       {
       "activityType":9, // 9代表特卖类活动
       "activityTag":null,//10限时购，20普通特卖活动,null也表示为限时购
       "tabId":"12",//<#--场次id-->
       "activityPrice":100,// <#--抢购价-->
       "startTime":"2016-08-22 21:00:30",//<#--限时购开始时间-->
       "nowToStartMs":100000000,// <#--距离活动开始还有多少毫秒,为负数时证明活动已经开始-->
       "nowToEndMs":25*60*60*1000+5*60*1000,// <#--距离活动结束还有多少毫秒-->
       "urlMsg":"更多低价爆款",
       "promotionTitle":"限时购-22<a>haha哈</a>",
       "activitUrl":"http://www.kaola.com/activity/111.html"
       }
       */
      __prepareTmData: function (bar, temai) {
        bar.temaiType = this.__hasTemaiOrXianshi(temai);
        bar.price = temai.activityPrice;//限时购价格
        bar.startTime = temai.startTime || '';//开始时间字符串
        bar.toStartMs = temai.nowToStartMs || -1;//距离开始时间毫秒
        bar.toEndMs = temai.nowToEndMs || -1;//距离结束时间毫秒
        bar.tabId = temai.tabId;
        bar.linkMsg = temai.urlMsg;
        bar.linkUrl = temai.activitUrl;
        bar.promotionTitle = temai.promotionTitle || ''; //倒计时标题完整文案

        bar.type = 1;
      },
      // 处理秒杀数据
      /*
       {
       "promotionTitle":"囤货节1",
       "seckillPrice":10,// <#--抢购价-->
       "startTime":"2016-8-17 21:10:00",//<#--秒杀开始时间-->
       "nowToStartMillis":-100000000,// <#--距离秒杀开始还有多少毫秒,为负数时证明已经开始-->
       "nowToEndMillis":24*60*60*1000+5*60*1000,//<#--距离秒杀结束还有多少毫秒-->
       "buyType":1,//<#--秒杀预热期间是否可购买 1可购买  0不可购买-->
       "landingPage":"/recommendUrl.html",//<#--商品被抢光，围观其他秒杀活动，秒杀活动落地页链接-->
       "afterSelloutGoodsId":"1234",//<#--秒杀期不可购买的商品，且商品被抢光，秒光后详情页引导购买ID-->
       "soldout":true,
       "currentPrice":110,
       "marketPrice":210
       }
       */
      __prepareSecData: function (bar, sec) {
        bar.price = sec.seckillPrice;//限时购价格
        bar.startTime = sec.startTime || '';//开始时间字符串
        bar.toStartMs = sec.nowToStartMillis || -1;//距离开始时间毫秒
        bar.toEndMs = sec.nowToEndMillis || -1;//距离结束时间毫秒
        bar.isCanBuy = (sec.buyType || 0) == 1;//秒杀预热期间是否可购买
        bar.isSoldOut = sec.soldout || false;//无库存
        bar.afterSelloutGoodsId = sec.afterSelloutGoodsId || '';//秒杀期不可购买的商品，且商品被抢光，秒光后详情页引导购买ID
        bar.promotionTitle = sec.promotionTitle || '';//分标题
        bar.pcLandingPage = sec.pcLandingPage;//商品被抢光，围观其他秒杀活动，秒杀活动落地页链接
        bar.marketPrice = sec.marketPrice; //参考价

        bar.type = 0;
      },
      __dealData: function (dt, prepareDataFn) {
        var bar = {type: 0, step: -1}; // 类型、状态

        prepareDataFn(bar, dt);

        if(bar.toEndMs <= 0 || !bar.startTime) return;

        //活动开始时间的date类型
        bar.startDate = _ut._$var2date(bar.startTime);

        //倒计时 - 即将开始
        bar.timer3 = {
          min: 0,
          sec: 0,
          milsec: 0
        };

        //倒计时 - 进行中
        bar.timer4 = {
          dayHide: false,
          day: 0,
          hour: 0,
          min: 0,
          sec: 0,
          milsec: 0
        };

        return bar;

      },

      //销毁
      destroy: function () {
        this.supr();
      }
    }).filter({
      '': function () {
      }
    })
      .use('timeout');

  },1,2,15,3,4,25,6,14,5,590,415,593,479);
I$(594,"{#if !!asyncReady && !!show} {! 异步数据已准备好 !}\n\n  {! 非卖品（与其他活动互斥） !}\n  {#if show.not4SaleGoods}\n  <div class=\"m-zd-prt m-zd-prt-1\">\n    <span class=\"m-line-title\">活动</span><span\n    class=\"m-zd-prt-desc ellipsis newer-desc\">本商品为非卖品，不支持购买</span>\n  </div>\n\n  {! 新人礼（与其他活动互斥） !}\n  {#elseif show.isNewerGift}\n  <div class=\"m-zd-prt\">\n    <span class=\"m-line-title\">活动</span><span\n    class=\"m-dp-prt-title\">新人礼</span><span\n    class=\"m-zd-prt-desc ellipsis newer-desc\">\n      <a href=\"{show.goodsForNewer.activityLink||''}\" target=\"_blank\" r-html=\"{show.goodsForNewer.detailTag||''}\"></a>\n    </span>\n  </div>\n\n  {#elseif show.promotions.length}\n\n  <div class=\"m-promotiontitle\"\n       r-class=\"{{'single': show.promotions.length == 1, 'hasgift': this.hasGift(show.promotions)}}\">\n    <div class=\"box\" r-class=\"{{'z-box': show.promotions.showAll}}\">\n      <div class=\"m-zd-prt\"><span class=\"m-line-title\">活动</span></div>\n    </div>\n    <div class=\"promotionwrap\"\n         r-class=\"{{'z-showall': show.promotions.showAll}}\"\n         on-mouseenter=\"{this.showPromotionEnter(show.promotions, show.promotions.length > 2)}\"\n         on-mouseleave=\"{this.showPromotionLeave(show.promotions)}\">\n      {#list show.promotions as pro}\n        {! 单品1、整单2、单品包税3、买赠4、税费返券5 !}\n        {#if pro.type===1||pro.type===2||pro.type===3||pro.type===4||pro.type===5}\n        <div class=\"m-zd-prt\">\n          <span class=\"m-dp-prt-title\">{pro.title}</span><span\n          class=\"m-zd-prt-desc ellipsis\">\n            {#if !!pro.link}\n              <a href=\"{pro.link|addParam:'zn','title','zp','activity'}\" target=\"_blank\" r-html=\"{pro.desc}\"></a>\n            {#else}\n              <span r-html=\"{pro.desc}\"></span>\n            {/if}\n          </span>\n\n          {! 买赠4 !}\n          {#if pro.type===4 && !!pro.giftList}\n          <div class=\"m-gift-list\">\n            {#list pro.giftList as img}\n            <a target=\"_blank\" href=\"/product/{img.giftGoodsId}.html\" title=\"{img.title}\"\n               class=\"m-gl-img\" r-class='{{\"m-gl-img-n\":!img.hasGiftStore}}'>\n              <img src=\"{img.imageUrl|noProtocol}?imageView&thumbnail=35x0\" alt=\"{img.title}\"/>\n            </a>\n            {#if img.hasGiftStore}\n            <span class=\"m-gl-number\" r-html=\"{'&#215;'+img.freeNumber}\"></span>\n            {#else}\n            <span class=\"m-gl-number m-gl-number-n\">赠完</span>\n            {/if}\n            {/list}\n          </div>\n          {/if}\n        </div>\n        {/if}\n      {/list}\n      {#if show.promotions.length > 2}\n        <span class=\"toggle\">\n          全部<i class=\"num\">{show.promotions.length}</i>项活动\n          <i class=\"iconfont up\" r-html=\"{'&#xe624;'}\" r-hide=\"{!show.promotions.showAll}\"></i>\n          <i class=\"iconfont down\" r-html=\"{'&#xe61e;'}\" r-hide=\"{show.promotions.showAll}\"></i>\n        </span>\n      {/if}\n    </div>\n  </div>\n\n  {/if}\n\n{/if}");
I$(422,function (_k, _ut, _v, _e, $, request, Module, _ani,
            DetailComponent, promotiontitletpl, // regualr
            _p, _o, _f, _r) {

    return DetailComponent.extend({
      template: promotiontitletpl,
      init: function () {
        var self = this, data = self.data;
        self.supr();
      },
      //数据初始化（异步）
      __asyncInitData: function () {
        var self = this, data = self.data,
          c_promotiontitle = data.c_promotiontitle || {},
          goods = c_promotiontitle.goods,
          async = c_promotiontitle.async, //异步数据
          titleData = async.titleData || {},
          asyncSkuList = titleData.skuPromotionList || []; //异步skuList

        // 缓存
        //c_promotiontitle._cache = {
        //  def: null,
        //  skuVidObj: {}
        //};

        // 展示的促销标签
        c_promotiontitle.show = {
          //新人礼（与其他促销互斥）
          isNewerGift: !!titleData.newerGift && !!titleData.goodsForNewer, //是否为新人礼
          goodsForNewer: titleData.goodsForNewer || {}, //新人礼数据
          //非卖品（与其他促销互斥）
          not4SaleGoods: !!goods.not4SaleGoods,
          //其他促销标签列表（单品1、整单2、单品包税3、考拉豆抵扣4、买赠5、税费返券6、优惠券7）
          promotions: []
        };

        //展示默认的促销标签
        if(!c_promotiontitle.defSkuVid) { //有默认选中的sku情况下，展示工作交给 changeSku 函数
          self.$emit('updatePromotionTitle');
        }

      },
      // 展示全部活动标签
      showPromotionEnter: function (promotions, showAll) {
        clearTimeout(promotions._sto);
        promotions._sto = this.$timeout(function () {
          promotions.showAll = !!showAll;
        }, 100);
      },
      // 隐藏多的活动标签，只展示2条
      showPromotionLeave: function (promotions) {
        clearTimeout(promotions._sto);
        promotions._sto = this.$timeout(function () {
          promotions.showAll = false;
        }, 100);
      },
      // 前两个活动是否有赠品
      hasGift: function (promotions) {
        var giftProList = promotions.filter(function (pro, idx) {
          return pro.type === 4 && idx <= 1;
        });
        return giftProList.length > 0;
      },
      //销毁
      destroy: function () {
        this.supr();
      }
    }).use('timeout');

  },1,2,3,4,25,6,5,590,415,594);
I$(595,"<div ref=\"wrap\">\n{#if !!asyncReady && c_toapp.show && !c_toapp.priceHide} {! 异步数据已准备好 !}\n  {! 手机秒杀 !}\n  {#if appType == 1}\n  <div class=\"m-app-act-pmt\">\n    <span class=\"m-line-title\"> </span>\n    {#if goods.appTemaiStartTimeMillis > kaolaSystemTime}\n      <span class=\"desc\">\n        <span class=\"num\">\n          ￥{c_toapp.price1|decimal:2,true}{#if !!c_toapp.price2}-{c_toapp.price2|decimal:2,true}{/if}\n        </span>手机App秒杀，{dayText}{goods.appTemaiStartTimeMillis|format:'HH:mm'}开抢\n      </span>\n      <span class=\"action\">扫我查看</span>\n    {#else}\n      <span class=\"desc\">\n        <span class=\"num\">\n          ￥{c_toapp.price1|decimal:2,true}{#if !!c_toapp.price2}-{c_toapp.price2|decimal:2,true}{/if}\n        </span>手机App秒杀进行中</span><span class=\"action\">扫我抢购</span>\n    {/if}\n    {! 二维码 !}\n    <span r-hide=\"{!goods.twoDimensionCode}\" class=\"qr-anchor\">\n      {#include qrcodetpl}\n    </span>\n  </div>\n\n  {! 手机专享 !}\n  {#elseif appType == 2}\n  <div class=\"m-app-act-pmt\">\n    <span class=\"m-line-title\"> </span>\n      <span class=\"desc\">\n        <span class=\"num\">\n          ￥{c_toapp.price1|decimal:2,true}{#if !!c_toapp.price2}-{c_toapp.price2|decimal:2,true}{/if}\n        </span>手机App专享，购买更优惠\n      </span>\n      <span class=\"action\">扫我购买</span>\n      {! 二维码 !}\n      <span r-hide=\"{!goods.twoDimensionCode}\" class=\"qr-anchor\">\n        {#include qrcodetpl}\n      </span>\n  </div>\n  {/if}\n\n{/if}\n</div>");
I$(596,"<div class=\"m-tip-wrap m-app-seckill-tip\"\n     r-style=\"{{'left':tipLeft, 'top':tipTop, 'display': !!tipShow?'block':'none'}}\"\n     style=\"visibility: visible; width: 114px; height: 114px;\">\n  <div class=\"u-tip-tri u-tip-tri-up\" style=\"left: 55px;\"><i class=\"u-tip-tri1\"></i><i class=\"u-tip-tri2\"></i></div>\n  <div class=\"m-tip-contents j-tipcontent\"></div>\n</div>\n");
I$(423,function (_k, _ut, _v, _e, $, request, Module, _ani, _Q,
            DetailComponent, toapptpl, qrcodetpl, // regualr
            _p, _o, _f, _r) {

    return DetailComponent.extend({
      template: toapptpl,
      data: {qrcodetpl: qrcodetpl},
      init: function () {
        this.supr();
      },
      //数据初始化（异步）
      __asyncInitData: function () {
        var self = this, data = self.data,
          c_toapp = data.c_toapp || {},
          goods = c_toapp.goods,
          skuList = goods.skuList || [];
        data.kaolaSystemTime = c_toapp.kaolaSystemTime;
        data.goods = goods;

        var appType = 0;
        if(goods.onlineStatus == 1){ // 非下架
          if(goods.appTemaiStartTimeMillis) { // 手机秒杀
            appType = 1;
            data.dayText = '今日';
            var appDate = new Date(goods.appTemaiStartTimeMillis),
              sysDate = new Date(data.kaolaSystemTime);
            if(appDate.getDate() != sysDate.getDate()) {
              data.dayText = '明日';
            }
          }else{ // 手机专享
            if(skuList.some(function (sku) {
                return !!sku.appOnlyPriceIncrement && sku.appOnlyPriceIncrement > 0;
              })) {
              appType = 2;
            }
          }
        }
        c_toapp.appType = data.appType = appType;
        self.__bindQrcode();
      },
      // 二维码&hover展示
      __bindQrcode: function () {
        var self = this, data = self.data,
          $wrap = $(self.$refs.wrap);
        data.tipShow = false;
        data.tipLeft = -48 + 'px';
        data.tipTop = 28 + 'px';
        data.__qrready = false;
        $wrap._$on({
          'mouseover .qr-anchor': function () {
            !data.__qrready && self.__makeQrcode($wrap._$children('.j-tipcontent', true), data.goods.twoDimensionCode, 114, 114);
            data.__qrready = true;
            data.tipShow = true;
            self.$update();
          },
          'mouseout .qr-anchor': function () {
            data.tipShow = false;
            self.$update();
          }
        });
      },
      __makeQrcode: function ($el, link, w, h) {
        if(!$el.length || !link) return;
        new QRCode($el[0], {
          text: link,
          width: w,
          height: h,
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.H
        });
      },
      //销毁
      destroy: function () {
        this.supr();
      }
    }).use('timeout');

  },1,2,3,4,25,6,5,590,20,415,595,596);
I$(597,"{#if !!asyncReady}\n\n<div class=\"addrBox\" style=\"display:{display};left:{addrBoxLeft};top:{addrBoxTop};\" ref=\"addrBox\">\n  <b class=\"addrbox-close\" on-click={this.hide(1)} r-html=\"{'&#xe605;'}\"></b>\n  <i class=\"addrbox-triup\" style=\"left:{triUpLeft};\"></i>\n  {#if !loading && !err}\n    <div class=\"addrbox-title\">\n      <ul class=\"addrbox-titlew\">\n      {#if curTab==0}\n        <li class=\"tli act\">请选择</li>\n      {#elseif curTab==1}\n        <li class=\"tli {act==1?'act':''}\" on-click='{this.pvcTabClick($event)}'>{curSel.province.shortName||'请选择'}</li>\n        <li class=\"tli {act==2?'act':''} {act?'':'act'}\" on-click='{this.cityTabClick($event)}'>请选择</li>\n      {#elseif curTab==2 || curTab==3}\n        <li class=\"tli {act==1?'act':''}\" on-click='{this.pvcTabClick($event)}'>{curSel.province.shortName||'请选择'}</li>\n        <li class=\"tli {act==2?'act':''}\" on-click='{this.cityTabClick($event)}'>{curSel.city.name||'请选择'}</li>\n        <li class=\"tli {act==3?'act':''} {act?'':'act'}\" on-click='{this.distTabClick($event)}'>{curSel.district.name||'请选择'}</li>\n      {#elseif curTab==4}\n        <li class=\"tli {act==1?'act':''}\" on-click='{this.pvcTabClick($event)}'>{curSel.province.shortName||'请选择'}</li>\n        <li class=\"tli {act==3?'act':''} {act?'':'act'}\" on-click='{this.distTabClick($event)}'>{curSel.district.name||'请选择'}</li>\n      {/if}\n      </ul>\n    </div>\n  {/if}\n\n  {#if !!loading}\n    <p class=\"tc\"><strong>正在获取数据...</strong></p>\n  {#elseif !!err}\n    <p class=\"tc\"><strong>数据获取失败，请刷新页面重试</strong></p>\n  {#elseif curTab==0 || act==1}\n    {#if provinces.length > 0}\n      {! 直辖市 !}\n      {#if directCitys.length > 0}\n      <div class=\"addrList zxCity clearfix\">\n        {#list provinces as dirCity}\n          {#if dirCity.isDirectCity}\n            <span>\n              <a title={dirCity.name} href=\"javascript:void(0);\" class=\"{!!dirCity.selected?'selected':''}\"\n                on-click=\"{this.directCityClick($event, dirCity)}\">{dirCity.name.slice(0,2)}</a>\n            </span>\n          {/if}\n        {/list}\n      </div>\n      {/if}\n      {!  其他省份 !}\n      <div class=\"addrList clearfix\">\n      {#list provinces as prov}\n        {#if !prov.isDirectCity}\n          <span>\n            <a title={prov.name} href=\"javascript:void(0);\" class=\"{!!prov.selected?'selected':''}\"\n              on-click=\"{this.pvcClick($event, prov)}\">{(prov.name.slice(0,2)=='黑龙')?'黑龙江':prov.name.slice(0,2)}</a>\n          </span>\n        {/if}\n      {/list}\n      </div>\n    {/if}\n  {#elseif curTab==1 || act==2}\n    <div class=\"addrList addrList2 clearfix\">\n    {#list citys as city}\n      <span style=\"width:{city.width}px\">\n        <a title={city.name} href=\"javascript:void(0);\" class=\"{!!city.selected?'selected':''}\"\n          on-click=\"{this.cityClick($event, city)}\">{city.name}</a>\n      </span>\n    {/list}\n    </div>\n  {#elseif curTab==2 || curTab==3 || curTab==4 || act==3}\n    <div class=\"addrList addrList2 clearfix\">\n    {#list districts as dist}\n      <span style=\"width:{dist.width}px\">\n        <a title={dist.name} href=\"javascript:void(0);\" class=\"{!!dist.selected?'selected':''}\"\n          on-click=\"{this.distClick($event, dist)}\">{dist.name}</a>\n      </span>\n    {/list}\n    </div>\n  {/if}\n</div>\n\n{/if}");
I$(424,function (_k, _ut, _v, _e, $, request, Module, _ani,
            DetailComponent, formTpl, // regualr
            _p, _o, _f, _r) {

    return DetailComponent.extend({
      template: formTpl,
      init: function () {
        var self = this, data = self.data;
        self.supr();
      },
      //数据初始化（异步）
      __asyncInitData: function () {
        var self = this, data = self.data,
          c_addrbox = data.c_addrbox || {},
          directCitys = c_addrbox.directCitys || []; //直辖市列表

        // 展示/隐藏地址控件
        c_addrbox._$toggle = self.toggle._$bind(self);
        // 设置收货地址
        c_addrbox._$setLocation = self.setLocation._$bind(self);

        //显隐
        data.display = 'none';
        data.loading = true;

        //获取直辖市列表（同步数据）
        data.directCitys = directCitys;

        //获取省份列表（异步，包含直辖市）
        data.provinces = [];
        data.citys = [];
        data.districts = [];

        //当前标签：0省份(默认) 1地市 2区县 3直辖市
        data.curTab = 0;

        //已选择的省市区
        data.curSel = {
          province: {},
          city: {},
          district: {}
        };

        //ajax 数据缓存
        data.ajaxTemp = data.ajaxTemp || {};

        //缓存选则的省市区，方便回退
        self.__cacheLoc();

        //初始化省市区数据
        self.__initProvCityDists();

      },
      // 设置收货地址
      //  - 异步获取省市区数据后，切换到对应的省市区
      setLocation: function (loc) {
        var self = this, data = self.data;
        if(data.loading) {
          self.$on('loaded', function () {
            self.__resetLocation(loc, false);
          });
        } else {
          self.__resetLocation(loc, false);
        }
      },
      __initProvCityDists: function () {
        var self = this, data = self.data;
        self.__getProvince(function () {
          //将属于直辖市的省份，增加字段isDirectCity=true标记
          var directCityListStr = ';', i, l, city;
          for(i = 0, l = data.directCitys.length; i < l; i++) {
            directCityListStr += (data.directCitys[i].code + ';');
          }
          if(!!data.currPvcCode){
            data.__curSel.province = self.__setLocByCode(data.provinces, data.currPvcCode);
          }
          for(i = 0, l = data.provinces.length; i < l; i++) {
            city = data.provinces[i];
            //该省份属于直辖市
            city.isDirectCity = directCityListStr.indexOf(city.code) > -1;
          }
        });
        if(!!data.currPvcCode && !!data.currCityCode) {
          self.__getCity(data.currPvcCode, function (citys) {
            data.__curSel.city = self.__setLocByCode(citys, data.currCityCode);
          });
          self.__getDist(data.currCityCode, function (districts) {
            data.currDistCode = data.currDistCode == 0 ? districts[0].code : data.currDistCode;
            data.__curSel.district = self.__setLocByCode(districts, data.currDistCode);
          });
        }
      },
      __cacheLoc: function (loc) {
        loc = loc || {};
        var self = this, data = self.data;
        data.__curSel = {
          province: loc.province || null,
          city: loc.city || null,
          district: loc.district || null
        };
      },
      __calcWidth: function (list, key) {
        key = key || 'name';
        var i, l, li, len, max = 7, w = 100;
        for(i = 0, l = list.length; i < l; i++) {
          li = list[i];
          len = (li[key] || '').length;
          li.width = w * Math.ceil(len / max);
        }
      },
      __get: function (level, code, dataStr, cb) {
        var self = this, data = self.data,
          ajaxCallback;
        self.data['loading_' + dataStr] = true;
    
        ajaxCallback = function (_json) {
          self.data[dataStr] = _json.list || [];
          cb && cb.apply(self, [self.data[dataStr]]);
      
          //保证只有第一次加载完毕才执行
          if(!data.loading) return;
      
          //全部加载完毕，即：
          //有默认的省市区且省市区列表加载完毕 或者 无默认值且省份列表加载完毕
          if((!data.currPvcCode && data.loading_provinces == false) ||
            (!!data.currPvcCode && data.loading_provinces == false && data.loading_citys == false && data.loading_districts == false)) {
        
            //全部加载完毕
            data.loading = false;
        
            //若省市区有默认值，则选择默认值
            if(!!data.currPvcCode) {
              self.__setLocation();
            }
        
            self.$emit('loaded', {
              currPvcCode: data.currPvcCode,
              currCityCode: data.currCityCode,
              currDistCode: data.currDistCode,
              provinces: data.provinces,
              citys: data.citys,
              districts: data.districts
            });
          }
        };
    
        //缓存请求数据
        var jsonTemp = data.ajaxTemp[level + "^_^" + code];
        if(!!jsonTemp) {
          ajaxCallback(jsonTemp);
        } else {
          request('/geography/get.html', {
            method: 'GET',
            data: {code: code, level: level},
            type: 'json',
            onload: function (json) {
              self.data['loading_' + dataStr] = false;
              if(json && json.retcode == 200) {
                data.ajaxTemp[level + "^_^" + code] = json;
                ajaxCallback(json);
              }else{
                data.err = true;
                self.data[dataStr] = [];
              }
              self.$update();
            },
            onerror: function () {
              data.err = true;
              self.data[dataStr] = [];
              self.$update();
            }
          });
        }
      },
      __getProvince: function (cb) {
        this.__get(1, '', 'provinces', cb);
      },
      __getCity: function (code, cb) {
        var self = this;
        this.__get(2, code, 'citys', function (citys) {
          self.__calcWidth(citys);
          cb && cb(citys);
        });
      },
      __getDist: function (code, cb) {
        var self = this;
        this.__get(3, code, 'districts', function (districts) {
          self.__calcWidth(districts);
          cb && cb(districts);
        });
      },
      pvcTabClick: function (evt) {
        var self = this, data = self.data;
        data.act = 1;
      },
      cityTabClick: function (evt) {
        var self = this, data = self.data;
        data.act = 2;
      },
      distTabClick: function (evt) {
        var self = this, data = self.data;
        data.act = 3;
      },
      distClick: function (evt, dist) {
        _v._$stop(evt);
        var self = this, data = self.data;
        this.hide();
        //同步当前的区和区code
        data.currDistCode = dist.code;
        self.__setLocation();
        //修改缓存的code
        self.__cacheLoc(data.curSel);
        this.$update();
      },
      cityClick: function (evt, city) {
        _v._$stop(evt);
        var self = this, data = self.data;
        data.currCityCode = city.code;
        data.currDistCode = 0;
        self.__getDist(data.currCityCode, function () {
          self.__setLocation();
        });
        this.$update();
      },
      directCityClick: function (evt, prov) {
        _v._$stop(evt);
        var self = this, data = self.data, city;
        data.currPvcCode = prov.code;
        data.currCityCode = 0;
        data.currDistCode = 0;
        self.__getCity(data.currPvcCode, function (citys) {
          if(citys && citys.length > 0){
            city = citys[0];
            data.currCityCode = city.code;
            data.currDistCode = 0;
            self.__getDist(data.currCityCode, function () {
              self.__setLocation();
            });
          }
        });
      },
      pvcClick: function (evt, prov) {
        _v._$stop(evt);
        var self = this, data = self.data;
        data.currPvcCode = prov.code;
        data.currCityCode = 0;
        data.currDistCode = 0;
        self.__getCity(data.currPvcCode, function () {
          self.__setLocation();
        });
      },
      //点击控件区域外，关闭控件
      __bindCloseEvent: function () {
        var self = this, data = self.data;
        if(!!data.__hasBindCloseEvent) return;
        data.__hasBindCloseEvent = true;
        $('body')._$on("click", function (evt) {
          var target = evt.target, addrBox = self.$refs.addrBox,
            childList = $(addrBox)._$children('*', true),
            isContain = Array.prototype.slice.apply(childList).some(function (subEl) {
              return subEl === target;
            });
          if(!!target && !!addrBox && !isContain && !data.__isShowingHiding){
            self.hide(1);
          }
        });
      },
      //显示/隐藏地址选择控件
      toggle: function () {
        var self = this, data = self.data;
        if(data.display == 'none') {
          self.show();
        } else if(data.display == 'block') {
          self.hide(1);//1表示恢复到缓存的初始值（省市区）
        }
      },
      __isShowingHiding: function () {
        var self = this, data = self.data;
        data.__isShowingHiding = true;
        self.$timeout(function () {
          data.__isShowingHiding = false;
        }, 300);
      },
      show: function () {
        var data = this.data, self = this;
        self.__isShowingHiding();
        self.__bindCloseEvent();
        //同步状态，使用默认的省市区，不触发 distselect
        self.__setLocation(null, true);
        data.display = 'block';
        self.$update();
        self.__paint();
        self.$update();
      },
      //隐藏控件，1表示恢复到缓存的初始值（省市区）
      hide: function (from) {
        var self = this, data = self.data;
        self.__isShowingHiding();
        data.display = 'none';
        //从中间状态关闭的，需要将中间状态变回来（回退初始值）
        if(from === 1) {
          data.curSel.province = data.__curSel.province || {};
          data.curSel.city = data.__curSel.city || {};
          data.curSel.district = data.__curSel.district || {};
      
          data.currPvcCode = data.__curSel.province && data.__curSel.province.code || 0;
          data.currCityCode = data.__curSel.city && data.__curSel.city.code || 0;
          data.currDistCode = data.__curSel.district && data.__curSel.district.code || 0;
      
          //当没有初始省市区时，不同步数据
          if(!!data.currPvcCode){
            self.__resetLocation(null, true);
          }
        }
        this.$update();
      },
      //从list中选择code==code的值，如果code为true则选择第一个
      __setLocByCode: function (list, code) {
        for(var i = 0, l = list.length, li, ret = {}; i < l; i++) {
          li = list[i];
          if(code === true){//选择第一个
            li.selected = true;
            return li;
          }
          if(li.code == code) {
            li.selected = true;
            ret = li;
          } else {
            li.selected = false;
          }
        }
        return ret;
      },
      //同步数据，省市区发生变化时
      __resetLocation: function (loc, noEmit) {
        var self = this, data = self.data;
        if(!!loc){
          data.currPvcCode = loc.currPvcCode;
          data.currCityCode = loc.currCityCode;
          data.currDistCode = loc.currDistCode || true;//如果没有区县，默认选第一个
        }
        //获取选择的省市列表（有缓存，不用担心请求过多）
        self.__getCity(data.currPvcCode, function () {
          self.__getDist(data.currCityCode, function () {
            self.__setLocation(loc, noEmit);//同步数据，根据新的省市区
            self.__cacheLoc(data.curSel);//将新的省市区更新到缓存
          });
        });
      },
      //同步数据，省市区
      __setLocation: function (loc, noEmit) {
        loc = loc || {};
        var self = this, data = self.data,
          currPvcCode = loc.currPvcCode || data.currPvcCode,
          currCityCode = loc.currCityCode || data.currCityCode,
          currDistCode = loc.currDistCode || data.currDistCode,
          isDirectCity;
    
        data.act = false;
        data.curTab = 0;
    
        if(currPvcCode) {
          data.curSel.province = self.__setLocByCode(data.provinces, currPvcCode);
          var name = data.curSel.province.name;
          data.curSel.province.shortName = name.slice(0,2)=='黑龙'?'黑龙江':name.slice(0,2);
          data.curTab = 1;
      
          //判断省份是否直辖市
          isDirectCity = !!data.curSel.province.isDirectCity;
        } else {
          data.curSel.province = {};
        }
    
        if(currCityCode) {
          data.curSel.city = self.__setLocByCode(data.citys, currCityCode);
          data.curTab = 2;
        } else {
          data.curSel.city = {};
        }
    
        if(currDistCode) {
          data.curSel.district = self.__setLocByCode(data.districts, currDistCode);
          data.curTab = 3;
        } else {
          data.curSel.district = {};
        }
    
        //是直辖市
        if(isDirectCity) {
          data.curTab = 4;
        }
    
        if(data.curTab == 3 || (data.curTab == 4 && currDistCode)) {
          !noEmit && this.$emit('distselect', data.curSel);
        }
        this.$update();
      },
      __paint: function () {
        var self = this, data = self.data,
          c_addrbox = data.c_addrbox || {},
          target = c_addrbox.target,
          tarRect,
          addrBox = this.$refs.addrBox,
          boxRect;

        if(!target) return;

        tarRect = self.__getRect(target);
        boxRect = self.__getRect(addrBox);

        //设定地址选择框位置；向上三角位置，在目的地址下方的正中间
        var toCenter = tarRect.left + tarRect.width / 2 - boxRect.left,
          addrBoxWidth = boxRect.width,
          addrBoxLeft = 0,
          triUpLeft = 0;
        if(toCenter >= addrBoxWidth / 2) {
          addrBoxLeft = toCenter - addrBoxWidth / 2;
          triUpLeft = addrBoxWidth / 2 - 8;
        } else {
          addrBoxLeft = 0;
          triUpLeft = toCenter - 8;
        }
    
        this.data.addrBoxLeft = addrBoxLeft + 'px';
        this.data.addrBoxTop = (tarRect.height + 10) + 'px';
        this.data.triUpLeft = triUpLeft + 'px';
      },
      __getRect: function (elem) {
        var tarRect = elem.getBoundingClientRect();
        tarRect.width = tarRect.width || tarRect.right - tarRect.left;
        tarRect.height = tarRect.height || tarRect.bottom - tarRect.top;
        return tarRect;
      },
      //销毁
      destroy: function () {
        this.supr();
      }
    }).use('timeout');

  },1,2,3,4,25,6,5,590,415,597);
I$(598,"{#if !!asyncReady} {! 异步数据已准备好 !}\n\n{#if skuGoodsPropertyList.length > 0}\n\n<div class=\"skuWrap\" id=\"j_skuwrap\" r-class=\"{{'errBox': c_skuprops.hasErr}}\">\n  {#list skuGoodsPropertyList as sku}\n  <div class=\"skuBox clearfix\"\n       r-class=\"{{'first-skubox': sku_index == 0, 'last-skuBox': !sku[sku_index+1]}}\">\n        <span class=\"m-line-title fl\"\n              r-class=\"{{'m-line-am-54': !!sku.hasImg, 'm-line-am-34': !sku.hasImg}}\">{sku.propertyNameCn}</span>\n\n    <div class=\"valueBox\">\n      <ul class=\"clearfix\">\n        {#list sku.propertyValues as value}\n\n        {#if value.hasImg}\n        <li title=\"{value.propertyValue}{!!value.nameAlias?' '+value.nameAlias+'':''}\" class=\"imgbox\"\n            on-click=\"{this.trigger(value.propertyValueId)}\"\n            r-class=\"{{'selectedLi': this.hasSelected(value.propertyValueId),\n              'stockout': this.isStockOut(value.propertyValueId)}}\">\n          <a href=\"javascript:void(0);\" hidefocus=\"true\">\n            <img src=\"{value.imageUrl|imgThumbnailUrl:50}\" alt=\"\" width=\"50\" height=\"50\" border=\"0\"/>\n          </a>\n          <i><span class=\"icon-checked\"></span></i>\n        </li>\n        {#else}\n        <li on-click=\"{this.trigger(value.propertyValueId)}\"\n            r-class=\"{{'selectedLi': this.hasSelected(value.propertyValueId),\n              'stockout': this.isStockOut(value.propertyValueId)}}\">\n          <a href=\"javascript:void(0);\" hidefocus=\"true\">\n            <span>{value.propertyValue}{!!value.nameAlias?'('+value.nameAlias+')':''}</span>\n          </a>\n          <i><span class=\"icon-checked\"></span></i>\n        </li>\n        {/if}\n\n        {/list}\n\n        {#list sku.propertyValues as value}\n        <li class=\"selectedImgDesc\" r-class=\"{{'show': showImgMsg && !!value.imgMsg && this.hasSelected(value.propertyValueId)}}\">\n          <p class=\"selectedImgTit\">已选择</p>\n          <p class=\"selectedDesc\">{value.imgMsg}</p>\n        </li>\n        {/list}\n\n      </ul>\n    </div>\n  </div>\n  {/list}\n  <div class=\"clearfix errTip\">\n    <span class=\"m-line-title fl\" r-html=\"{'&#12288;'}\"></span>\n\n    <div class=\"valueBox\">\n      <i class=\"sign sign-alert\" r-html=\"{'&#xe614;'}\"></i>\n      <span>哎哟，规格还没选好呢...</span>\n    </div>\n  </div>\n</div>\n{/if}\n\n{/if}");
I$(425,function (_k, _ut, _v, _e, $, request, Module, _ani,
            DetailComponent, skuprops, // regualr
            _p, _o, _f, _r) {

    return DetailComponent.extend({
      template: skuprops,
      config: function () {
        var self = this, data = self.data;
        self.supr();
      },
      //数据初始化（异步）
      __asyncInitData: function () {
        var self = this, data = self.data,
          async = data.async,
          c_skuprops = data.c_skuprops,
          skuInfo = c_skuprops.skuInfo,
          vids;

        data.skuGoodsPropertyList = c_skuprops.skuGoodsPropertyList || [];
        skuInfo.allVidList = []; //[[12,13],[127,128,129],..]

        data.skuGoodsPropertyList.forEach(function (sku) {
          sku.hasImg = false;
          vids = [];
          (sku.propertyValues || []).forEach(function (value) {
            value.hasImg = false;
            if(!!value.imageUrl) {
              sku.hasImg = true;
              value.hasImg = true;
              value.imgMsg = value.propertyValue + (!!value.nameAlias ? ' '+ value.nameAlias : '');
            }
            vids.push(value.propertyValueId);
          });
          skuInfo.allVidList.push(vids);
        });

        //切换到对应的vid，无sku则默认切换到''
        self.$timeout(function () {
          (c_skuprops.defTriggerSkuVid || '').replace(/^_/, '').split('_').forEach(function (vid) {
            self.trigger(vid); //触发多sku商品属性的点击事件
          }/*, 34*/);
        });

      },
      trigger: function (vid) {
        var self = this, data = self.data,
          c_skuprops = data.c_skuprops,
          skuInfo = c_skuprops.skuInfo,
          allVidList = skuInfo.allVidList,
          selVidList = skuInfo.selVidList,
          idx = selVidList.indexOf(vid), oidx,
          value = self.__getValue(vid),
          imageUrl = '';
        if(value && value.imageUrl) {
          imageUrl = value.imageUrl;
        }
        if(allVidList.every(function (_vids) { //选择的vid不存在，则刷新
            return (_vids || []).indexOf(vid) < 0;
          })){
          imageUrl = ''; //
        } else if(idx != -1) {                 //选择的vid已经选择，则删掉
          selVidList.splice(idx, 1);
          data.showImgMsg = false;
          imageUrl = ''; //
        } else {                               //选择的vid未选择，则添加
          //删除同属性的vid
          allVidList.forEach(function (vids) {
            if(vids.indexOf(vid) != -1) {
              vids.forEach(function (otherVid) {
                oidx = selVidList.indexOf(otherVid);
                if(oidx != -1) {
                  selVidList.splice(oidx, 1);
                }
              });
            }
          });
          selVidList.push(vid); //添加
          data.showImgMsg = true;
        }

        selVidList.sort(); //根据unicode编码排序

        var skuSelected = allVidList.length === 0 || //单sku无需选择vid属性
          (allVidList.length > 0 && selVidList.length === allVidList.length); //多sku，且所有属性均已选择
        if(skuSelected) {
          c_skuprops.hasErr = false;
        }

        // 选择的vid改变了，重新渲染各个组件
        self.$emit('selectSkuVid', {
          selVidList: selVidList,
          allVidList: allVidList,
          imageUrl: imageUrl
        });
      },
      // 根据vid，获取value
      __getValue: function (vid) {
        var self = this, data = self.data, ret, value = null;
        (data.skuGoodsPropertyList || []).forEach(function (sku) {
          ret = (sku.propertyValues || []).filter(function (value) {
            return value.propertyValueId === vid;
          });
          if(ret.length){
            value = ret[0];
          }
        });
        return value;
      },
      // 这个vid是否被选中了
      hasSelected: function (vid) {
        var selVidList = this.data.c_skuprops.skuInfo.selVidList || [];
        return selVidList.indexOf(vid) != -1;
      },
      // 这个vid是否缺货
      isStockOut: function (vid) {
        var stockOutList = this.data.c_skuprops.skuInfo.stockOutList || [];
        return stockOutList.indexOf(vid) != -1;
      },
      //销毁
      destroy: function () {
        this.supr();
      }
    }).use('timeout');

  },1,2,3,4,25,6,5,590,415,598);
I$(599,"{#if !!asyncReady} {! 异步数据已准备好 !}\n\n  <form action=\"{c_form.domainUrl}order/confirm.html?from=detailfp\" method=\"post\" ref=\"formEl\">\n\n    {! 表单-数量控件 !}\n    <c_buynum\n      c_buynum={c_form.c_buynum}\n      asyncReady={asyncReady}\n      c_form={c_form}\n      headShow={show}\n      on-setBuyCartBtn={this.setBuyCartBtn($event)}></c_buynum>\n\n    <div class=\"buyBtns\">\n\n      {! 秒杀商品(预热期不可购买) & 展示秒杀按钮部分 !}\n      {#if show.seckillBtn.show}\n      <div>\n        {#if show.seckillBtn.wait2Buy}\n        <span class=\"j-seckillAbout2Begin seckillAbout2Begin\">{show.seckillBtn.wait2Buy||'敬请期待'}</span>\n        {#elseif show.seckillBtn.soldOut}\n        <div class=\"j-seckillToBuy seckillToBuy\">\n          {#if show.seckillBtn.afterSelloutGoodsId}\n          <span>原商品正在低价促销中，请</span><a href=\"/product/{show.seckillBtn.afterSelloutGoodsId}.html?nm=1\" target=\"_blank\">点击此处</a>\n          {#else}\n          <span>该活动商品已抢光，下次早点来哦</span>\n          {/if}\n        </div>\n        {/if}\n        {! 收藏子组件 !}\n        <c_favbtn\n          c_favbtn={c_form.c_favbtn}\n          clazz=\"m-favbtn-s\"></c_favbtn>\n      </div>\n\n      {! 秒杀商品(预热期可购买) 或 特卖/限时购商品 在预热期，如果缺货，则不展示缺货按钮，改为展示「即将开抢」 !}\n      {#elseif !!btns.noGoodsBtn && show.seckillBtn.preSale}\n      <span class=\"seckillAbout2Begin\">即将开抢</span>\n      {! 收藏子组件 !}\n      <c_favbtn\n        c_favbtn={c_form.c_favbtn}\n        clazz=\"m-favbtn-s\"></c_favbtn>\n\n      {#else}\n\n        {! btns 要控制的变量：buyNowBtn、buyNowBtnStr、buyCartBtnDisable、hideAdd2CartBtn、noGoodsBtn、arrivalNoticeBtn !}\n\n        {#if !!btns.buyNowBtn} {! 立即购买 !}\n        <a id=\"buyBtn\" r-class=\"{{'buynowonly': !btns.isShowCart || btns.hideAdd2CartBtn, 'disabled': btns.buyCartBtnDisable}}\"\n           on-click=\"{this.buyNow()}\" hidefocus=true href=\"javascript:void(0)\">{btns.buyNowBtnStr || '立即购买'}</a>\n\n        {#elseif !!btns.noGoodsBtn} {! 暂时缺货 !}\n          <span class=\"btn-nogoods\">暂时缺货</span>\n        {/if}\n\n        {#if !!btns.arrivalNoticeBtn && !!btns.noGoodsBtn} {! 到货通知 !}\n          <span class=\"btn-arrivalNotice\" on-click=\"{this.arrivalNotice()}\"><b></b>到货通知</span>\n          {! 收藏子组件 !}\n          <c_favbtn\n            c_favbtn={c_form.c_favbtn}\n            clazz=\"m-favbtn-s\"></c_favbtn>\n\n        {#elseif btns.isShowCart && !!btns.buyNowBtn && !btns.hideAdd2CartBtn} {! 加入购物车 & 收藏按钮 !}\n          <a href=\"javascript:void(0);\" id=\"addCart\" r-class=\"{{'disabled': btns.buyCartBtnDisable}}\" hidefocus=true\n             on-click=\"{this.add2Cart($event)}\"><span class=\"sign icon-cart20\" r-html=\"{'&#xe600;'}\"></span>加入购物车</a>\n          {! 收藏子组件 !}\n          <c_favbtn\n            c_favbtn={c_form.c_favbtn}\n            clazz=\"m-favbtn-s\"></c_favbtn>\n\n        {#else}\n          {! 收藏子组件 !}\n          {! (!加入购物车 && !到货通知) => 大按钮 !}\n          <c_favbtn\n            c_favbtn={c_form.c_favbtn}\n            clazz=\"m-favbtn-l\"></c_favbtn>\n\n        {/if}\n\n      {/if}\n\n      {! 展示「秒杀期间不支持购物车结算(异步)、包税商品、不支持退货、不可使用优惠券」提示 !}\n      <c_goodstips\n        c_goodstips={c_form.c_goodstips}\n        asyncReady={asyncReady}></c_goodstips>\n\n    </div>\n    <input type=\"hidden\" name=\"goods[0].selected\" value=\"1\" />\n    <input type=\"hidden\" name=\"goods[0].goodsId\" value=\"{goods.goodsId}\" />\n    <input type=\"hidden\" name=\"goods[0].tempCurrentPrice\" value=\"{show.seckillPrice||show.proPrice||show.currentPrice}\" />\n    <input type=\"hidden\" name=\"goods[0].tempGoodsActivityType\" value=\"\" />\n    <input type=\"hidden\" name=\"goods[0].innerSource\" _name=\"innerSource\" value=\"{c_form.innerSource || 'DETAIL'}\" />\n    <input type=\"hidden\" name=\"s\" value=\"2\"/>\n    <input type=\"hidden\" name=\"goods[0].skuId\" value=\"{form.skuId}\" />\n    <input type=\"hidden\" name=\"goods[0].productType\" value=\"{goods.productType || ''}\" />\n    {! 赠品 !}\n    {#list giftList as gift}\n      {#if !!gift.hasGiftStore}\n        <input type=\"hidden\" name=\"goods[0].goodsActivityGiftListTemp[{gift_index}].activityGiftId\" value=\"{gift.activityGiftId}\">\n        <input type=\"hidden\" name=\"goods[0].goodsActivityGiftListTemp[{gift_index}].giftType\" value=\"{gift.giftType}\">\n        <input type=\"hidden\" name=\"goods[0].goodsActivityGiftListTemp[{gift_index}].freeNumber\" value=\"{gift.freeNumber}\">\n        <input type=\"hidden\" name=\"goods[0].goodsActivityGiftListTemp[{gift_index}].giftGoodsId\" value=\"{gift.giftGoodsId}\">\n      {/if}\n    {/list}\n  </form>\n\n{/if}");
I$(602,"{#if !!asyncReady && tipList.length} {! 异步数据已准备好 !}\n\n<div class=\"buynowonly-wrap\">\n  <ul class=\"buynowonly-tip-lis point\">\n    {#list tipList as tip}\n      <li><i></i>{tip}</li>\n    {/list}\n  </ul>\n</div>\n\n{/if}");
I$(427,function (_k, _ut, _v, _e, $, request, Module, _ani,
            DetailComponent, goodstipsTpl, // regualr
            _p, _o, _f, _r) {

    return DetailComponent.extend({
      template: goodstipsTpl,
      init: function () {
        var self = this, data = self.data;
        self.supr();
      },
      //数据初始化（异步）
      __asyncInitData: function () {
        var self = this, data = self.data,
          c_goodstips = data.c_goodstips || {},
          goods = c_goodstips.goods,
          async = c_goodstips.async, //异步数据
          tipList,
          titleData = async.titleData || {};

        data.tipList = tipList = c_goodstips.tipList = c_goodstips.tipList || [];

        var isBuyNowOnly = goods.isBuyNowOnly == 1,
          isShowCart = goods.isShowCart == 1,
          taxDetailType = goods.taxDetailType == 1,
          canReturnGoods = goods.canReturnGoods == 1,
          canUseCoupon = goods.canUseCoupon == 1,
          refundDays = c_goodstips.refundDays || 7;

        var showSeckillNotSupportCart = false,
          showCoverTax = (isBuyNowOnly && !isShowCart && taxDetailType),
          showNoReturnGoods = !canReturnGoods,
          showUseCoupon = !canUseCoupon;

        if(!!titleData.seckillActivityGoods) {
          var nowToStartMillis = titleData.seckillActivityGoods.nowToStartMillis || 0;
          if(nowToStartMillis > 0 && isShowCart) {
            showSeckillNotSupportCart = true;
          }
        }

        var o = {
          is: [
            showSeckillNotSupportCart, //秒杀期间，不支持购物车结算
            showCoverTax, //税费≤50，直接下单可免税
            showNoReturnGoods, //不支持7天无理由退货
            !showNoReturnGoods, //支持"+refundDays+"天无忧退货
            showUseCoupon //不支持使用优惠券
          ],
          tips: [
            "秒杀期间，不支持购物车结算",
            "税费≤50，直接下单可免税",
            "不支持7天无理由退货",
            "支持" + refundDays + "天无忧退货",
            "不支持使用优惠券"
          ]
        };

        o.tips.forEach(function (tip, i) {
          if(!!o.is[i]) {
            tipList.push(tip);
          }
        });

      },
      //销毁
      destroy: function () {
        this.supr();
      }
    }).use('timeout');

  },1,2,3,4,25,6,5,590,415,602);
I$(676,"<div ref=\"mdialog\" class=\"m-favsucdlgW m-dialog {clazz}\" animate style=\"z-index:10001;width:{width}px; height:{height}px;margin-left:-{width/2}px; left:50%; margin-top:-{height/2}px; top:50%; \">\n\t<div class=\"head\">\n\t\t<h1>提示</h1>\n\t</div>\n\t<a class=\"close\" hidefocus=\"true\" href=\"javascript:;\" on-click=\"{this.onclose()}\"></a>\n\t<div class=\"body\">\n\t\t<div class=\"message\">\n\t\t\t<div class=\"m-favsucdlg\">\n\t\t\t\t<h3 class=\"tit\">\n\t\t\t\t\t<i class=\"iconfont sucicon\" r-html=\"{'&#xe612;'}\"></i>收藏成功！\n\t\t\t\t</h3>\n\t\t\t\t<div class=\"link\">\n\t\t\t\t\t您可以在&ensp;个人中心&ensp;&gt;&ensp;<a hidefocus=\"true\" href=\"/personal/listfavorite.html?zn=favor\" target=\"_blank\">我收藏的商品</a>&ensp;查看此商品\n\t\t\t\t</div>\n\t\t\t\t<div class=\"otherfav\">\n\t\t\t\t\t<h4>喜欢此商品的人还喜欢</h4>\n\t\t\t\t\t<div class=\"otherfavlist\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"m-pcarousel m-pcarousel-s\">\n\t\t\t\t\t\t\t<i class=\"leftarr iconfont {current==0?'z-dis':''}\" on-click=\"{this.__scrollLeft()}\" hidefocus=true r-html=\"{'&#xe623;'}\"></i>\n\t\t\t\t\t\t\t<i class=\"rightarr iconfont {current==pages.length-1?'z-dis':''}\" on-click=\"{this.__scrollRight()}\" hidefocus=true r-html=\"{'&#xe61f;'}\"></i>\n\t\t\t\t\t\t\t<div class=\"m-pcarouselw\">\n\t\t\t\t\t\t\t\t<ul style=\"width:{scrollbarWidth}px;left:{left}px\">\n\t\t\t\t\t\t\t\t\t{#list goodsList as goods}\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a class=\"imgw\" href=\"/product/{goods.goodsId}.html?rp=detail&zp=favor&zn=rec&recid={goods.recReason||''}\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"{goods.imageUrl|imgThumbnailUrl:98}\" alt=\"{goods.title}\">\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<a class=\"protit\" href=\"/product/{goods.goodsId}.html?rp=detail&zp=favor&zn=rec&recid={goods.recReason||''}\" target=\"_blank\">{goods.title}</a>\n\t\t\t\t\t\t\t\t\t\t<p class=\"price\">￥{goods.actualCurrentPrice|price}</p>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t{/list}\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ul class=\"dots\">\n\t\t\t\t\t\t\t\t{#list pages as page}\n\t\t\t\t\t\t\t\t<li class=\"dot {page_index==current?'z-act':''}\"></li>\n\t\t\t\t\t\t\t\t{/list}\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"u-mask\" style=\"z-index:10000;\"></div>");
I$(654,function (AnimateDialog, _, _u, _ut, _easeinout, _tpl) {
  var Dialog = AnimateDialog.extend({
    template: _tpl,
    config: function (data) {
      _ut.extend(data, {
        width: 520,
        height: 400
      });
      this.supr(data);

      //打点
      _.daEvent("商品详情页", "收藏", "弹窗出现");

      data.dspushScroll = ['商品详情页', '收藏', '切换']; //打点数据，切换

      //展示的商品数据
      data.goodsList = data.goodsList || [];
      data.pages = [];//所有页[0,0,0...]
      data.current = 0;//当前页
      data.size = data.size || 3;//每页商品数
      var size = data.size,
        goodsLen = data.goodsList.length,
        pageLen = parseInt(goodsLen / size);//页数
      if(pageLen * size < goodsLen) {
        pageLen++;
      }
      for(var i = 0, l = pageLen; i < l; i++) {
        data.pages.push(0);
      }
      data.scrollbarWidth = goodsLen * 120 + 10;
      data.left = 0;

    },
    __scrollLeft: function () {
      var self = this, data = self.data, dapush = data.dspushScroll;
      if(data.current == 0 || !!data.animating) return;

      //打点
      _.daEvent(dapush[0], dapush[1], dapush[2]);

      data.animating = true;
      var from = data.left, to = from + data.size * 120;
      self.__easeInOut(from, to, 500, function (offset) {
        data.left = offset;
      }, function () {
        data.current--;
        data.animating = false;
      });
    },
    __scrollRight: function () {
      var self = this, data = self.data, dapush = data.dspushScroll;
      if(data.current == data.pages.length - 1 || !!data.animating) return;

      //打点
      _.daEvent(dapush[0], dapush[1], dapush[2]);

      data.animating = true;
      var from = data.left, to = from - data.size * 120;
      self.__easeInOut(from, to, 500, function (offset) {
        data.left = offset;
      }, function () {
        data.current++;
        data.animating = false;
      });
    },
    __easeInOut: function (from, to, dur, updateCb, stopCb, autoPlay /*默认：true*/) {
      var self = this;
      autoPlay = autoPlay === undefined;
      var ani = _easeinout._$$AnimEaseInOut._$allocate({
        from: {offset: from},
        to: {offset: to},
        duration: dur,
        onupdate: function (event) {
          updateCb && updateCb(event.offset);
          self.$update();
        },
        onstop: function () {
          stopCb && stopCb();
          this._$recycle();
          self.$update();
        }
      });
      !!autoPlay && ani._$play();
      return ani;
    },
    onclose: function () {
      this.supr();
      this.data.onclose && this.data.onclose();
    }
  }).use('timeout')
    .filter({
      price: function (price) {
        return _u._$fixed(price || 0, 2);
      }
    });

  return Dialog;
},386,15,2,15,185,676);
I$(655,"{#if show}\n<a class=\"m-favbtn {clazz}\" href=\"javascript:void(0)\" style=\"visibility: visible;\"\n   on-click=\"{this.click($event)}\"\n   on-mouseenter=\"{this.mouseenter($event)}\"\n   on-mouseleave=\"{this.mouseleave($event)}\">\n  <i class=\"iconfont ic\" r-html=\"{'&#xe62a;'}\" r-hide=\"{!hasAdded}\"></i>\n  <i class=\"iconfont ic\" r-html=\"{'&#xe62c;'}\" r-hide=\"{hasAdded}\"></i>\n  <span class=\"txt\">{hasAdded ? (hover ? '取消收藏' : '已收藏') : '收藏'}</span>\n</a>\n{/if}");
I$(600,function (_k, _ut, _, _u, _v, _e, $, request, FavAddedDialog, Module, _ani,
            DetailComponent, favbtn, // regualr
            _p, _o, _f, _r) {

    return DetailComponent.extend({
      template: favbtn,
      config: function () {
        var self = this, data = self.data;
        self.supr();
        self.$watch('c_favbtn.hasAdded', function (hasAdded) {
          if(hasAdded !== undefined){
            data.hasAdded = hasAdded;
            data.show = true;
          }
        });
      },
      //数据初始化
      __initData: function () {
        var self = this, data = self.data,
          c_favbtn = data.c_favbtn || {};

        data.padding = false; //收藏请求中..

        data.show = false; //是否展示组件

        // 从缓存：c_favbtn.hasAdded 中获取状态
        if(c_favbtn.hasAdded !== undefined){
          data.hasAdded = c_favbtn.hasAdded;
          data.show = true;
        }

        if(!!c_favbtn.firstBlock) return;
        c_favbtn.firstBlock = true;
        //本组件第一次调用时执行
        self.__hasAdded(function (hasAdded) {
          c_favbtn.hasAdded = data.hasAdded = hasAdded; //是否已收藏
          data.show = true;
          self.$update();
        }._$bind(self));

      },
      click: function (evt) {
        var self = this, data = self.data,
          c_favbtn = data.c_favbtn || {},
          goods = c_favbtn.goods;

        _v._$stop(evt);
        if(data.padding) return;
        data.padding = true;
        clearTimeout(data.paddingSto);
        data.paddingSto = setTimeout(function () {
          data.padding = false;
        }, 1000);

        if(this.data.hasAdded) {
          this.delFav(goods.goodsId);
        } else {
          this.addFav(goods.goodsId);
        }
      },
      // 添加收藏
      addFav: function (goodsId) {
        var self = this, data = self.data;

        _u.afterLogin(function () {
          request('/favoriteAjax/add.html', {
            method: 'POST',
            data: {goodsId: goodsId},
            type: 'json',
            norest: true,
            onload: function (json) {
              if(json && (json.retcode === 200 || json.retcode === 491)) {
                //修改状态
                data.c_favbtn.hasAdded = data.hasAdded = true;

                //弹窗
                new FavAddedDialog({data: {goodsList: json.result || []}}).$inject(document.body);

                self.$update();
              } else {
                self.__errDialog('oh，服务器和考拉私奔了，请重试');
              }
              data.padding = false;
            },
            onerror: function () {
              self.__errDialog('网络信号不佳，请稍后重新');
              data.padding = false;
            }
          });
        });
      },
      // 取消收藏
      delFav: function (goodsId) {
        var self = this, data = self.data;
        request('/favoriteAjax/delete.html', {
          method: 'POST',
          data: {goodsId: goodsId},
          type: 'json',
          norest: true,
          onload: function (json) {
            if(json && json.retcode === 200) {
              //修改状态
              data.c_favbtn.hasAdded = data.hasAdded = false;
              self.$update();
            } else {
              self.__errDialog('oh，服务器和考拉私奔了，请重试');
            }
            data.padding = false;
          },
          onerror: function () {
            self.__errDialog('网络信号不佳，请稍后重新');
            data.padding = false;
          }
        });
      },
      // 错误提示弹窗
      __errDialog: function (text) {
        this._$dialog('', 'notice', text || '网络或系统错误');
      },
      mouseenter: function (evt) {
        _v._$stop(evt);
        this.data.hover = true;
      },
      mouseleave: function (evt) {
        _v._$stop(evt);
        this.data.hover = false;
      },
      // 是否收藏
      __hasAdded: function (callback) {
        var self = this, data = self.data,
          c_favbtn = data.c_favbtn || {},
          goods = c_favbtn.goods;

        request('/favoriteAjax/isFavorite.html', {
          method: 'POST',
          data: {goodsId: goods.goodsId},
          type: 'json',
          norest: true,
          onload: function (json) {
            if(json && json.retcode === 200 && json.result) {
              callback(true);
            } else {
              callback(false);
            }
          },
          onerror: function () {
            callback(false);
          }
        });

      },
      //销毁
      destroy: function () {
        this.supr();
      }
    }).use('timeout');

  },1,2,15,26,3,4,25,6,654,5,590,415,655);
I$(656,"{#if !!asyncReady} {! 异步数据已准备好 !}\n\n<span class=\"m-line-title fl m-line-am-30\">数量</span>\n<em name=\"js_buyBox\" class=\"buybox\" id=\"j_buyboxnum\">\n  <span class=\"ctrnum-wrap\">\n    <a on-click=\"{this.reduce()}\" r-class=\"{{'ctrnum-b-dis': show.reduceHide}}\"\n       href=\"javascript:void(0);\" class=\"ctrnum-b ctrnum-b-rd\" hidefocus=true r-html=\"{'&#xe608;'}\"></a>\n    <input on-blur=\"{this.blur()}\" type=\"text\" value=\"1\" r-model=\"{show.number}\" name=\"goods[0].tempBuyAmount\" class=\"ctrnum-qty\" autocomplete=\"off\"/>\n    <a on-click=\"{this.add()}\" r-class=\"{{'ctrnum-b-dis': show.addHide}}\"\n       href=\"javascript:void(0);\" class=\"ctrnum-b ctrnum-b-ad\" hidefocus=true r-html=\"{'&#xe60a;'}\"></a>\n  </span>\n  <span class=\"domeTips\" id=\"js_dometxt\">{show.msg || ''}</span>\n  <span class=\"dome hide\" id=\"js_dome\"></span>\n  <span class=\"over-amt-alert left-arrow-tip\" id=\"js_overAmountTip\" r-hide=\"{!show.overAmount}\">\n    <span class=\"arr0\">&nbsp;</span>\n    <span class=\"arr1\">&nbsp;</span>\n    <span class=\"over-amt-txt\">\n      抱歉，您已超过\n      <a hidefocus=true  href=\"javascript:void(0);\" id=\"overAmount\"\n         on-mouseenter=\"{this.alertEnter()}\"\n         on-mouseleave=\"{this.alertLeave()}\">限额￥{show.maxAmount}</a>，请分次购买\n    </span>\n    <div class=\"tip-wrap\"\n         r-style=\"{{'display': !!show.showOverAmountTip ? 'block' : 'none'}}\"\n         on-mouseenter=\"{this.tipEnter()}\"\n         on-mouseleave=\"{this.tipLeave()}\">\n      <div class=\"tip-tri\"></div>\n      <div class=\"tip-mask\"></div>\n      <div class=\"tip-body\">\n        {#if show.importType != 2}\n          <p>国家政策规定：</p>\n          <p>① 消费者购买进口商品，以“个人自用，合理数量”为原则，每单最大购买金额不得超过2000元人民币（不含税费）；</p>\n          <p>② 部分仓库每单最大购物金额不得超过1000 / 800元人民币；</p>\n          <p>③ 具体请以商品提示为准。</p>\n        {#else}\n          <p>温馨提示：</p>\n          <p>①  购买{show.warehouseNameAlias||'本'}商品，每单最大购买金额不得超过{show.maxAmount}元人民币。</p>\n          <p>②  如有优惠活动，则{show.maxAmount}元限值适用于订单优惠后的金额。</p>\n          <p>③  如果订单只含单件不可分割商品，则可以超过{show.maxAmount}元限值。</p>\n        {/if}\n      </div>\n    </div>\n  </span>\n</em>\n\n{/if}");
I$(601,function (_k, _ut, _, _v, _e, $, request, Module, _ani,
            DetailComponent, buynum, // regualr
            _p, _o, _f, _r) {

    return DetailComponent.extend({
      template: buynum,
      config: function () {
        var self = this, data = self.data;
        self.supr();
        data.show = {number: 1};
      },
      //数据初始化（异步）
      __asyncInitData: function () {
        var self = this, data = self.data,
          c_buynum = data.c_buynum || {};

        data.show = c_buynum.show;

        c_buynum._$skuChange = function (skuVid) {
          this.buynum_skuchange(skuVid);
          this.buynum_numberChange(0);
        }._$bind(self);
        c_buynum._$blur = self.blur._$bind(self);
        c_buynum._$sourceChange = self.buynum_sourceChange._$bind(self);
        c_buynum._$getStore = self.buynum_getStore._$bind(self);
        c_buynum._$getStoreAll = self.buynum_getStoreAll._$bind(self);
        c_buynum._$hasBuyLimit = self.buynum_hasBuyLimit._$bind(self);
        c_buynum._$getLimitsInfo = self.buynum_getLimitsInfo._$bind(self);

        // 初始化数据
        self.buynum_init();

        //触发一次校验
        self.buynum_numberChange(0);
      },

      // 刷新异步数据（用于登录之后刷新限购信息）
      buynum_sourceChange: function () {
        var self = this, data = self.data,
          c_buynum = data.c_buynum || {},
          async = c_buynum.async,
          show = data.show;

        show.skuVidMap = async.skuVidMap;
        show.skuIdMap = async.skuIdMap;

        //计算限购条件，并触发 limitchange 事件
        self.__calcLimits(show.currentVid);

        //触发一次校验
        self.buynum_numberChange(0);
      },

      /**
       * 检查是否有需要登录后才能判定的限购项
       * 主要有两种限购涉及到此项检查： 单账号限购， 单日单账号限购
       * @param  {String}  skuId 可选参数，skuId
       * @return {Boolean} true表示有，false无
       * @public
       */
      buynum_hasBuyLimit: function (skuId) {
        var self = this, data = self.data,
          result = false,
          show = data.show,
          skuIdMap = show.skuIdMap, sku;
        if(!!skuId) {
          sku = skuIdMap[skuId] || {};
          if(sku.accountLimitBuyCount != null || sku.dailyLimit != null) {
            result = true;
          }
        } else {
          //未指定skuId时则只要商品下边有任何一个sku有限购就返回true
          for(var key in skuIdMap) {
            if(!skuIdMap.hasOwnProperty(key)) continue;
            sku = skuIdMap[key];
            if(sku.accountLimitBuyCount != null || sku.dailyLimit != null) {
              result = true;
              break;
            }
          }
        }
        return result;
      },

      //加事件处理
      add: function () {
        this.buynum_numberChange(1);
      },
      //减事件处理
      reduce: function () {
        this.buynum_numberChange(-1);
      },
      //输入框失去焦点事件处理
      blur: function () {
        this.buynum_numberChange(0);
      },
      alertEnter: function () {
        this.data.show.showOverAmountTip = true;
      },
      alertLeave: function () {
        var data = this.data;
        data._hoverTimeout = this.$timeout(function () {
          data.show.showOverAmountTip = false;
        }, 300);
      },
      tipEnter: function () {
        clearTimeout(this.data._hoverTimeout);
      },
      tipLeave: function () {
        var data = this.data;
        data._hoverTimeout = this.$timeout(function () {
          data.show.showOverAmountTip = false;
        }, 300);
      },
      buynum_init: function () {
        var self = this, data = self.data,
          c_buynum = data.c_buynum || {},
          goods = c_buynum.goods,
          async = c_buynum.async,
          skuVid = _.getUrlParam('skupvs'), //url的skupvs参数
          show = data.show = c_buynum.show;

        show.skuVidMap = async.skuVidMap;
        show.skuIdMap = async.skuIdMap;

        show.importType = goods.importType || 0;
        show.maxAmount = goods.warehouse.payAmountLimit || 1000;
        show.warehouseNameAlias = goods.warehouse.warehouseNameAlias || '';

        show.isBuyNowOnly = goods.isBuyNowOnly || 0; // 0：正常商品 1：保税商品

        show._TOPQTY = 99;  //如果其它限制项都无效，则此为最大限制
        show._STORETHRESHHOLD = 10; //显示库存数与库存充足切换点，>=此值后显示库存充足
        show._WEIGHTMAP = {  //同等限制数量时的权重优先级, 数字越小优先级越高
          "account": 1,  //单账号限购
          "daily": 2, //单日单账号限购
          "buynowonly": 3, //包税限制
          "perorder": 4, //单次购买限制
          "store": 5  //库存范围
        };

        show.number = 1;

        //计算限购条件，并触发 limitchange 事件
        self.__calcLimits(skuVid);
      },

      buynum_numberChange: function (step) {
        var self = this, data = self.data,
          show = data.show;
        step = step || 0;

        var limitInfo = self.buynum_getLimitsInfo(),
          num = parseInt(show.number, 10) || 1,
          max = limitInfo.maxQty,
          min = limitInfo.minQty;

        //加减按钮是否enabled
        show.addHide = show.reduceHide = false;

        show.isBuyBtnsEnable = false;

        num += step;

        if(min < max) {
          if(num <= min) {
            num = min;
            show.reduceHide = true;
          } else if(num > min && num < max) {
            //不需要重置
          } else if(num >= max) {
            num = max;
            show.addHide = true;
          }
          // 立即购买、加入购物车 按钮是否设为enabled
          show.isBuyBtnsEnable = true;
          self.$emit('setBuyCartBtn', {enable: true});
        } else {
          if(min > 1) {
            num = min;
          } else {
            num = max;
          }
          show.addHide = show.reduceHide = true;
          if(min > max) {
            show.isBuyBtnsEnable = false;
            self.$emit('setBuyCartBtn', {enable: false});
          } else {
            show.isBuyBtnsEnable = true;
            self.$emit('setBuyCartBtn', {enable: true});
          }
        }

        //设置控件input数量
        show.number = num;

        //判断是否超过海关额度限制，如果为国内仓，直接跳过检查
        self.__checkOverAmount();
      },

      //生成限购信息对象
      buynum_getLimitsInfo: function () {
        var self = this, data = self.data,
          show = data.show,
          newlimitObj = {},
          limitObj = show.limitObj;
        for(var key in limitObj) {
          if(!limitObj.hasOwnProperty(key)) {
            continue;
          }
          newlimitObj[key] = limitObj[key];
        }
        return {
          maxQty: self.__getMaxQty(),
          minQty: self.__getMinQty(),
          msg: self.__getLimitMsg(),
          limitObj: newlimitObj
        };
      },

      //获取全部sku的库存
      buynum_getStoreAll: function () {
        return this.buynum_getStore(''); //skuVid != undefined
      },

      //获取 sku 的最大库存
      //未选择完整的 sku 但选择了部分商品属性，则返回所有未选择的 sku 库存之和
      buynum_getStore: function (skuVid) {
        var self = this, data = self.data,
          show = data.show,
          store = 0,
          skuVidMap = show.skuVidMap,
          sku, ids = [], key, currentStore;
        if(skuVid == undefined) {
          skuVid = show.currentVid;
        }
        function check(ids, key) {
          var check = true;
          key = '_' + key + '_';
          for(var i = 0; i < ids.length; i++) {
            if(key.indexOf('_' + ids[i] + '_') == -1) {
              check = false;
              break;
            }
          }
          return check;
        }

        if(skuVid) {
          ids = skuVid.replace(/^_|_$/g, '').split('_');
        }
        for(key in skuVidMap) {
          if(!skuVidMap.hasOwnProperty(key)) {
            continue;
          }
          sku = skuVidMap[key];
          currentStore = parseInt(sku.currentStore || 0);
          if(parseFloat(sku.actualStorageStatus) === 0) {
            continue;
          }
          if(ids.length) {
            check(ids, key) && (store += currentStore);
          } else {
            store += currentStore;
          }
        }
        return store;
      },

      //切换sku
      buynum_skuchange: function (skuVid) {
        var self = this, data = self.data,
          show = data.show;
        //计算限购条件，并触发 limitchange 事件
        self.__calcLimits(skuVid);
      },

      //判断是否超过海关额度限制，如果为国内仓，直接跳过检查
      __checkOverAmount: function () {
        var self = this, data = self.data,
          show = data.show,
          importType = show.importType,
          maxAmount = parseFloat(show.maxAmount) || 0,
          headShow = data.headShow || {};

        if(importType === '3' || importType === '2') return;

        var number = parseInt(show.number, 10) || 0,
          price = parseFloat(headShow.seckillPrice || headShow.proPrice || headShow.currentPrice || 0);
        if(number != 1 && price * number > maxAmount) {
          show.overAmount = true;
          self.$emit('setBuyCartBtn', {enable: false});
        } else {
          show.overAmount = false;
          if(!!show.isBuyBtnsEnable) {
            self.$emit('setBuyCartBtn', {enable: true});
          }
        }
      },

      //计算限购条件，并触发 limitchange 事件
      __calcLimits: function (skuVid) {
        var self = this, data = self.data,
          show = data.show,
          sku = show.skuVidMap[skuVid]; //默认选中的sku，可能不存在

        show.currentVid = skuVid;
        show.currentSku = sku;

        var _qtyList;
        if(sku) {
          _qtyList = self.__limitsBySku(skuVid, sku);
        } else {
          _qtyList = self.__limitsNoSku();
        }
        show.limitObj = self.__getLimitObj(_qtyList); //最终起最大值限定作用的限制条件

        var limitsInfo = self.buynum_getLimitsInfo();

        show.msg = limitsInfo.msg; //展示限购提示文案

      },
      __getMaxQty: function () {
        return this.data.show.limitObj.maxQty;
      },
      __getMinQty: function () {
        var self = this, data = self.data,
          show = data.show,
          sku = show.currentSku;
        if(sku && self.__hasMinBuyNum()) {
          return parseFloat(sku.minBuyNum);
        } else {
          return 1;
        }
      },
      //是否N件起售, 大于1才算N件起售
      __hasMinBuyNum: function () {
        var self = this, data = self.data,
          show = data.show,
          sku = show.currentSku,
          minNum;
        if(sku) {
          minNum = parseFloat(sku.minBuyNum) || 0;
          return minNum && minNum > 1;
        }
        return false;
      },
      __getLimitMsg: function () {
        var self = this, data = self.data,
          show = data.show,
          info = show.limitObj,
          msg = '';
        switch(info.type) {
          case "account":
            if(info.bought === 0) {
              msg = '限购' + info.limit + '件';
            } else {
              msg = '限购' + info.limit + '件(您已购买过' + info.bought + '件)';
            }
            break;
          case "daily":
            if(info.bought === 0) {
              msg = '单日限购' + info.limit + '件';
            } else {
              msg = '单日限购' + info.limit + '件(已购' + info.bought + '件)';
            }
            break;
          case "buynowonly":
            msg = "单次仅限购买1件";
            break;
          case "perorder":
            msg = '单次限购' + info.limit + '件';
            break;
          case "store":
            if(info.maxQty >= show._STORETHRESHHOLD) {
              msg = '库存充足';
            } else if(info.maxQty < show._STORETHRESHHOLD && info.maxQty > 0) {
              msg = '库存' + info.maxQty + '件';
            } else {
              msg = '库存不足';
            }
            break;
        }
        //若有「N件起售」，则消息需要重置
        if(self.__hasMinBuyNum()) {
          var minNum = self.__getMinQty(),
            minBuyMsg = minNum + '件起售',
            storeMsg = '';
          if(info.type === 'store') {
            if(info.maxQty < show._STORETHRESHHOLD + minNum && info.maxQty >= minNum) {
              storeMsg = '仅剩' + info.maxQty + '件';
            } else if(info.maxQty < minNum) {
              storeMsg = '缺货';
            }
            if(storeMsg) {
              msg = minBuyMsg + '，' + storeMsg;
            } else {
              msg = minBuyMsg;
            }
          } else {
            msg = minBuyMsg + '，' + msg;
          }
        }
        return msg;
      },

      //根据sku获取限购信息：全部
      __limitsBySku: function (skuVid, sku) {
        var self = this, data = self.data,
          show = data.show;
        sku = sku || show.currentSku;
        skuVid = skuVid || show.currentVid;

        var accountLimitBuyCount = parseFloat(sku.accountLimitBuyCount) || 0,
          accountBuyCount = parseFloat(sku.accountBuyCount) || 0,
          dailyBuyCount = parseFloat(sku.dailyBuyCount) || 0,
          dailyLimit = parseFloat(sku.dailyLimit) || 0,
          limitBuyOnce = parseFloat(sku.limitBuyOnce) || 0,
          accountCanBuy, dailyCanBuy,
          _qtyList = [];
        //account:单账号限购
        if(accountLimitBuyCount) {
          accountCanBuy = accountLimitBuyCount - accountBuyCount;
          _qtyList.push({
            type: "account",
            maxQty: accountCanBuy < 0 ? 0 : accountCanBuy,
            limit: accountLimitBuyCount,
            bought: accountBuyCount
          });
        }
        //daily:单日单账号限购
        if(dailyLimit) {
          dailyCanBuy = dailyLimit - dailyBuyCount;
          _qtyList.push({
            type: "daily",
            maxQty: dailyCanBuy < 0 ? 0 : dailyCanBuy,
            limit: dailyLimit,
            bought: dailyBuyCount
          });
        }
        //buynowonly:包税限制
        if(show.isBuyNowOnly === 1) {
          _qtyList.push({type: "buynowonly", maxQty: 1});
        }
        //perorder:单次购买限制
        if(limitBuyOnce) {
          _qtyList.push({
            type: "perorder",
            maxQty: limitBuyOnce,
            limit: limitBuyOnce
          });
        }
        //store:库存范围
        _qtyList.push({type: "store", maxQty: Math.min(show._TOPQTY, self.buynum_getStore(skuVid))});
        return _qtyList;

      },

      //无sku，获取限购信息：buynowonly、store
      __limitsNoSku: function () {
        var self = this, data = self.data,
          show = data.show;

        var _qtyList = [];
        //buynowonly:包税限制
        if(show.isBuyNowOnly === 1) {
          _qtyList.push({type: "buynowonly", maxQty: 1});
        }
        //store:库存范围
        _qtyList.push({type: "store", maxQty: Math.min(show._TOPQTY, self.buynum_getStore() || 0)});
        return _qtyList;
      },

      //获取显示的限购条件，根据：最大限购数、优先级
      __getLimitObj: function (qtyList) {
        var self = this, data = self.data,
          show = data.show;
        qtyList = qtyList || [];

        function sortAsc(a, b) {
          var diff = a.maxQty - b.maxQty;
          if(diff === 0) {
            return show._WEIGHTMAP[a.type] - show._WEIGHTMAP[b.type];
          } else {
            return diff;
          }
        }

        qtyList.sort(sortAsc);
        return qtyList[0];
      },

      //销毁
      destroy: function () {
        this.supr();
      }
    })
      .use('timeout')
      ;

  },1,2,15,3,4,25,6,5,590,415,656);
I$(426,function (_k, _ut, _v, _e, $, request, Module, _ani,
            DetailComponent, form, Goodstips, Favbtn, Buynum, // regualr
            _p, _o, _f, _r) {

    return DetailComponent.extend({
      template: form,
      init: function (data) {
        var self = this;
        self.supr();
      },
      //数据初始化
      __initData: function () {
        var self = this,
          data = self.data,
          c_form = data.c_form;

        c_form.$formEl = self.$refs.formEl;

        data.goods = c_form.goods;
        data.form = c_form.form; //表单隐藏域
        data.btns = c_form.btns; //按钮
        data.giftList = c_form.form.giftList || []; //赠品列表

      },
      // 立即购买、加入购物车 按钮是否设为enabled
      setBuyCartBtn: function (param) {
        this.data.c_form.btns.buyCartBtnDisable = !param.enable;
        // 大按钮修改之后，触发小按钮同步修改
        this.$emit('btnChange');
      },
      // 立即购买
      buyNow: function () {
        this.$emit('buyNow');
      },
      // 加入购物车
      add2Cart: function (event) {
        this.$emit('add2Cart', event);
      },
      // 到货通知
      arrivalNotice: function () {
        this.$emit('arrivalNotice');
      },
      //销毁
      destroy: function () {
        this.supr();
      }
    })
      .use('timeout')
      .component('c_buynum', Buynum)
      .component('c_goodstips', Goodstips)
      .component('c_favbtn', Favbtn)
      ;

  },1,2,3,4,25,6,5,590,415,599,427,600,601);
I$(603,"<dd class=\"m-comment-bar j-commentbar\">\n  <span class=\"emptyStar percentStar\" r-class=\"{{'greystar': count==0}}\"><span r-html=\"{'&#xe621;&#xe621;&#xe621;&#xe621;&#xe621;'}\"></span><span class=\"fullStar\" r-style=\"{{'width': width}}\" r-html=\"{'&#xe60c;&#xe60c;&#xe60c;&#xe60c;&#xe60c;'}\"></span></span>\n  {#if !!percent}<span class=\"goodPercent\">{percent|decimal:0,false}%</span>{/if}\n  <span class=\"comnum comm\">\n    <a href=\"javascript:void(0);\"\n       on-click=\"{this.scroll2Comment({type:1,category:'商品详情页',event:'评价',label:''})}\"\n    >{count}人</a>评价</span>\n  {#if (commentStat.commentImagesCount || 0) > 0}\n  <span class=\"commWithImg comm\">\n    <a href=\"javascript:void(0);\"\n       on-click=\"{this.scroll2Comment({type:2,category:'商品详情页',event:'晒单',label:''})}\"\n    >{commentStat.commentImagesCount}人</a>晒单</span>\n  {/if}\n</dd>\n{#if excellentcomments.length}\n  <dd class=\"m-excelComm j-excelcomm\" on-mouseenter=\"{this.enter()}\" on-mouseleave=\"{this.leave()}\"\n    r-class=\"{{'m-excelComm-show': showDetail}}\">\n    <p class=\"tit\" r-style=\"{{'opacity': opacity}}\" r-html=\"{(comm.nicknameKaola || comm.accountShow || '')+'&nbsp;&nbsp;&nbsp;&nbsp;'+comm.createTime}\"></p>\n    <p class=\"detail\" r-style=\"{{'opacity': opacity}}\">{comm.commentContent || ''}</p>\n    {#if excellentcomments.length > 1}\n      <div class=\"tg\">\n        <div class=\"tgbtn up dis iconfont\"\n             r-class=\"{{'dis': curr === 0}}\"\n             on-click=\"{this.prev()}\"\n             r-html=\"{'&#xe624;'}\"\n          ></div>\n        <div class=\"tgbtn down iconfont\"\n             r-class=\"{{'dis': curr === (excellentcomments.length-1)}}\"\n             on-click=\"{this.next()}\"\n             r-html=\"{'&#xe61e;'}\"\n          ></div>\n      </div>\n    {/if}\n  </dd>\n{/if}");
I$(428,function (_k, _ut, _, _v, _e, $, request, Module, _ani,
            DetailComponent, tpl, // regualr
            _p, _o, _f, _r) {

    return DetailComponent.extend({
      template: tpl,
      init: function () {
        var self = this, data = self.data;
        self.supr();
      },
      //数据初始化
      __initData: function () {
        var self = this, data = self.data,
          c_excellentcomments = data.c_excellentcomments || {},
          goods, excellentcomments, commentStat;

        excellentcomments = data.excellentcomments = c_excellentcomments.excellentcomments || [];
        if(excellentcomments.length) {
          data.comm = excellentcomments[0];
        }
        commentStat = data.commentStat = c_excellentcomments.commentStat || {};
        goods = data.goods = c_excellentcomments.goods;

        data.point = goods.commentPoint || 0;
        if(data.point == 0) {
          data.point = 5;
        }
        data.count = commentStat.commentsCount || 0;
        data.width = (Math.round(data.point * 2) * 10) + '%';
        if(data.count != 0) {
          data.percent = commentStat.goodCommentsCount / data.count * 100;
        }

        data.curr = 0;
        self.__addAuto();

      },
      // 添加自动轮播
      __addAuto: function () {
        var self = this, data = self.data,
          c_excellentcomments = data.c_excellentcomments || {},
          excellentcomments = c_excellentcomments.excellentcomments || [],
          len = excellentcomments.length, curr;
        if(len <= 1) return;

        var old = +new Date(), now,
          time = 5000, leaveTime = 5100;
        function run() {
          now = +new Date();
          if((now - old) < leaveTime) { //离开页面之后，脚本停止执行动画
            curr = data.curr + 1;
            if(curr > (len - 1)) {
              curr = 0;
            }
            self.__to(curr);
          }
          old = now;
          data.autoTimeout = self.$timeout(run, time);
        }
        data.autoTimeout = self.$timeout(run, time);
      },
      // 滚动并查看评论
      scroll2Comment: function (dapush) {
        _.daEvent(dapush.category, dapush.event, dapush.label); //打点
        this.$emit('scroll2Comment', dapush);
      },
      enter: function () {
        var self = this, data = self.data;
        clearInterval(data.autoTimeout);
        clearTimeout(data.leaveTimeout);
        data.enterTimeout = self.$timeout(function () {
          data.showDetail = true;
        }, 200);
      },
      leave: function () {
        var self = this, data = self.data;
        self.__addAuto();
        clearTimeout(data.enterTimeout);
        data.leaveTimeout = self.$timeout(function () {
          data.showDetail = false;
        }, 200);
      },
      prev: function () {
        if(this.data.curr === 0) return;
        _.daEvent("商品详情页", '内容切换', ''); //打点
        this.__to(this.data.curr - 1);
      },
      next: function () {
        var self = this, data = self.data,
          c_excellentcomments = data.c_excellentcomments || {},
          excellentcomments = c_excellentcomments.excellentcomments || [],
          len = excellentcomments.length;
        if(data.curr === (len - 1)) return;
        _.daEvent("商品详情页", '内容切换', ''); //打点
        self.__to(data.curr + 1);
      },
      __to: function (curr) {
        var self = this, data = self.data,
          c_excellentcomments = data.c_excellentcomments || {},
          excellentcomments = c_excellentcomments.excellentcomments || [];

        self._$easeInOut(1, 0, 100, update, function fadeEnd() {
          data.comm = excellentcomments[data.curr = curr];
          self._$easeInOut(0, 1, 150, update);
        });

        function update(offset) {
          data.opacity = offset;
        }
      },
      //销毁
      destroy: function () {
        this.supr();
      }
    }).use('timeout');

  },1,2,15,3,4,25,6,5,590,415,603);
I$(604,function (_p, _o, _f, _r) {
    return {
      DATA: 'data',
      SHOW: 'data.show',

      // 同步数据
      SKUVIDMAP: 'data.skuMap',
      SKULIST: 'data.skuList',

      // 组件
      C_IMAGE: 'data._$components.c_image', // 图片组件
      C_PROMOTIONBAR: 'data._$components.c_promotionbar', // 提示条组件
      C_PROMOTIONTITLE: 'data._$components.c_promotiontitle', // 促销标签组件
      C_TOAPP: 'data._$components.c_toapp', // 手机秒杀、手机专享
      C_ADDRBOX: 'data._$components.c_addrbox', // 地址组件
      C_SKUPROPS: 'data._$components.c_skuprops', // sku属性组件
      C_FORM: 'data._$components.c_form', // 表单模块
      C_FORM_BTNS: 'data._$components.c_form.btns', // 表单模块：按钮
      C_FORM_FORM: 'data._$components.c_form.form', // 表单模块：表单
      C_BUYNUM: 'data._$components.c_buynum', // 表单模块-数量组件
      C_GOODSTIPS: 'data._$components.c_goodstips', // 表单模块-提示组件
      C_FAVBTN: 'data._$components.c_favbtn', //表单模块-收藏按钮组件
      C_EXCELLENTCOMMENTS: 'data._$components.c_excellentcomments', // 精华评价

      // 异步数据
      ASYNC: 'data._$async',
      ASYNC_TITLEDATA: 'data._$async.titleData',
      ASYNC_ITEMDATA: 'data._$async.itemData',
      ASYNC_SKULIST: 'data._$async.skuList',
      ASYNC_SKUIDMAP: 'data._$async.skuIdMap',
      ASYNC_SKUVIDMAP: 'data._$async.skuVidMap',
      ASYNC_PROMOTIONSALEITEM: 'data._$async.promotionSaleItem', // 大促提示条信息
      ASYNC_PERSONALCUSTOM: 'data._$async.personalCustom' // 个人物品清关的限购信息

    };
  });
I$(429,function (_k, C, _ck, _ut, _, _v, _e, $, request, Module, _p, _o, _f, _r) {
    return {

      // 重新获取异步数据，并更正限购信息（数量组件）
      // 用于登录之后更正 data._$async 的数据，与 限购信息
      updateAsyncData: function (callback) {
        var self = this;
        this.initHead(function () {
          self._$find(C.C_BUYNUM)._$sourceChange();
          callback && callback();
        });
      },

      // 获取页面初始化需要的异步数据
      initHead: function (initCb) {
        var self = this, data = self.data;
        var goods = data.goods,
          goodsId = goods.goodsId;

        var cb1Suc = false, cb2Suc = false,
          titleData, itemData, hasErr = false,
          titleNum = 0, itemNum = 0;

        function promotionTitle() {
          var url = '/product/ajax/queryPromotionTitle.html';
          // nm=1 表示：接口将会校验「秒杀未结束，但活动库存为0」这种情况，如果符合，则不返回秒杀的相关数据
          // nm不为1，则接口不进行校验，直接返回秒杀数据，前端会显示「秒杀已结束」状态
          if(_.getUrlParam('nm') == 1){
            url += '?nm=1';
          }
          request(url, {
            method: 'GET',
            data: {goodsId: goodsId},
            type: 'json',
            onload: function (json) {
              if(!!json.success) {
                cb1Suc = true;
                titleData = json.data || {};
                if(!!cb1Suc && !!cb2Suc) {
                  dealData();
                }
              } else {
                ajaxErr(1, 'title');
              }
            },
            onerror: function () {
              ajaxErr(2, 'title');
            }
          });
        }

        function promotionItem() {
          request('/product/ajax/queryPromotionItem.html', {
            method: 'GET',
            data: {goodsId: goodsId},
            type: 'json',
            onload: function (json) {
              if(!!json.success) {
                cb2Suc = true;
                itemData = json.data || {};
                if(!!cb1Suc && !!cb2Suc) {
                  dealData();
                }
              } else {
                ajaxErr(1, 'item');
              }
            },
            onerror: function () {
              ajaxErr(2, 'item');
            }
          });
        }

        promotionTitle();
        promotionItem();

        // 数据处理
        function dealData() {
          // 数据初步处理
          var skuList = titleData.skuPromotionList || [], skuIdMap = {}, skuVidMap = {};
          for(var i = 0, l = skuList.length, sku; i < l; i++) {
            sku = skuList[i];
            skuIdMap[sku.skuId] = sku;
            skuVidMap[sku.skuPropertyValueId4View || ''] = sku;
          }

          // 个人物品清关的限购信息
          var personalCustom = itemData,
            perSkus = itemData.personalCustomerLimitModels || [],
            perSkuVidMap = {};
          if(!!perSkus && perSkus.length > 0) {
            i = 0;
            for(var psku; i < perSkus.length; i++) {
              psku = perSkus[i];
              perSkuVidMap[psku.skuPropertyValueId4View || ''] = psku;
            }
          }

          // 大促提示条
          var promotionSaleItem = itemData.promotionSaleItem;
          if(!!promotionSaleItem && !!promotionSaleItem.skuPromotionPrePriceMap) {
            promotionSaleItem.skuPromotionPrePriceList = self._$object2array(promotionSaleItem.skuPromotionPrePriceMap);
          }

          // 将初步处理的数据放到 data._$async
          data._$async.titleData = titleData;
          data._$async.itemData = itemData;
          // 各种sku级别异步信息
          data._$async.skuList = skuList;
          data._$async.skuIdMap = skuIdMap;
          data._$async.skuVidMap = skuVidMap;
          // 大促提示条
          data._$async.promotionSaleItem = promotionSaleItem;
          // 个人物品清关的限购信息
          data._$async.personalCustom = personalCustom;
          data._$async.personalCustom.skuVidMap = perSkuVidMap;

          // (页面初始化的)异步数据生效
          data._$async.ready = true;

          // 初始化异步数据
          if(!!initCb) {
            initCb();
          } else {
            self.__initAsyncModules();
          }

          self.$update();

        }

        // 异常处理，每个接口再给一次机会吧  ~
        function ajaxErr(type, ajax) {
          if(hasErr) return;
          // 第一次错误重发请求
          if(ajax == 'title' && titleNum == 0) {
            titleNum++;
            promotionTitle();
            return;
          } else if(ajax == 'item' && itemNum == 0) {
            itemNum++;
            promotionItem();
            return;
          }
          hasErr = true;
          //不同的异常提示不同
          var title = 'oh，服务器和考拉私奔了，请刷新页面重试下哦~',
            btn = "知道了";
          if(type == 1) {
          } else if(type == 2) {
            title = '网络信号不佳，请稍后重新刷新页面';
            btn = "刷新";
          }

          self._$dialog('', 'forbid', title || '网络或系统错误', '', btn, {
            onok: reload,
            cancel: reload
          });
          function reload(){
            window.location.reload();
          }

        }
      },

      // 初始化依赖于异步数据的模块
      __initAsyncModules: function () {
        var self = this, data = self.data,
          goods = data.goods,
          titleData = self._$find(C.ASYNC_TITLEDATA),
          c_addrbox = self._$find(C.C_ADDRBOX),
          c_skuprops = self._$find(C.C_SKUPROPS),
          aSkuList = self._$find(C.ASYNC_SKULIST),
          skuList = self._$find(C.SKULIST), //同步数据 skuList
          promotionSaleItem = self._$find(C.ASYNC_PROMOTIONSALEITEM); //大促数据

        //父组件展示对象 初始化
        var show = data.show = data.show || {};

        // 大促图标识图-通栏（在「榜单标识图-通栏」位置，优先级低于榜单通栏图）
        data.pSaleItem = promotionSaleItem || {};

        // 预售信息
        data.show.preSaleInfo = null;

        // 售价、参考价、折扣
        self.__updatePriceDiscount(
          titleData.currentPrice || goods.currentPrice,
          titleData.marketPrice || goods.marketPrice
        );

        // 虚拟组合商品1 > 新人礼2 > 折扣3 标签
        self.__initMemberInfo(titleData, show);

        // 初始化新人礼
        self.__initNewerGift(titleData, show);

        // 获取&初始化：运费文案、默认收货地址、次日达
        self.getPostage(goods.goodsId, function (shippingTo) {
          c_addrbox._$setLocation && c_addrbox._$setLocation({
            "currPvcCode": shippingTo.parentCode || 0,
            "currCityCode": shippingTo.code || 0,
            "currDistCode": (shippingTo.children[0] || {}).code || 0
          });
        });

        // 初始化税费
        self.__initTaxFee(titleData, aSkuList, show);

        // 准备切换到的 vid，在c_skuprops组件中调用
        //  - 无sku属性，默认触发vid为''
        c_skuprops.defTriggerSkuVid = '';
        if(data.defSkuVid) { // _+ => 增加一个初始化的过程
          c_skuprops.defTriggerSkuVid = '_' + data.defSkuVid;
        } else if(aSkuList.length == 1) { //只有一个sku，默认选中该sku
          c_skuprops.defTriggerSkuVid = '_' + aSkuList[0].skuPropertyValueId4View;
        }

      },

      // 初始化税费
      __initTaxFee: function (titleData, aSkuList, show) {
        show.defTaxFeeMsg = {
          //是否为「从量计征的普通商品」或「成分商品只有从量计征商品的虚拟组合商品」
          isSpecificDutyGoods: titleData.isSpecificDutyGoods == 1,
          //根据当前商品显示价格计算得到的商品税费，不包含运费税费
          goodsTaxAmount: titleData.goodsTaxAmount
        };
        show.taxFeeMsgMap = {};
        aSkuList.forEach(function (sku) {
          show.taxFeeMsgMap[sku.skuId] = {
            //是否为「从量计征的普通商品」或「成分商品只有从量计征商品的虚拟组合商品」
            isSpecificDutyGoods: sku.isSpecificDutyGoods == 1,
            //根据当前商品显示价格计算得到的商品税费，不包含运费税费
            goodsTaxAmount: sku.goodsTaxAmount || ''
          };
        });
        show.taxFeeMsg = show.defTaxFeeMsg;
      },

      //初始化新人礼
      __initNewerGift: function (titleData, show) {
        var newerGift = show.newerGift = {
          isNewerGift: titleData.newerGift || false, // 是否是「新人礼」商品
          goodsForNewer: titleData.goodsForNewer || false //
        };
        if(newerGift.isNewerGift && newerGift.goodsForNewer) {
          //商品详情栏的小按钮，隐藏
          this._$find(C.C_FORM_BTNS).buyNowBtn = false;
          this.$emit('btnChange', {
            formBtns: this._$find(C.C_FORM_BTNS),
            showSeckillBtn: show.seckillBtn && show.seckillBtn.show
          });
          // 删除「手机秒杀、手机专享」
          this._$find(C.C_TOAPP).show = false;
        }
      },

      // 组合商品信息、折扣 两个标签互斥，
      // 优先级为：组合商品信息1 > 折扣2（折扣的显示由 __updatePriceDiscount 函数控制）
      __initMemberInfo: function (titleData, show) {
        show.member = show.member || {};
        show.tagType = 0;
        var memberCount = titleData.memberCount || 0,
          memberPrice = titleData.memberPrice,
          showDiscountCost = titleData.showDiscountCost || false, // 是否展示组合标签
          memberUnitName = titleData.memberUnitName || '件';

        var showMember = memberCount > 0 && !!memberUnitName && memberPrice >= 0; // 组合商品信息齐全

        if(showMember) { // 是组合商品
          show.member.title = memberCount + memberUnitName + '装';
        }

        // 组合商品、新人礼 标签的展示
        if(showMember && showDiscountCost && memberPrice != null) {
          show.tagType = 1;
          show.member.unit = memberUnitName;
          show.member.price = Math.round(memberPrice * 100) / 100;
        }
      },

      // update 售价、参考价、折扣
      __updatePriceDiscount: function (currentPrice, marketPrice) {
        var show = this.data.show;
        // 售价
        if(currentPrice != null) {
          currentPrice = show.currentPrice = currentPrice || 0;
        }
        // 参考价
        show.marketPrice = marketPrice > 0 ? marketPrice : null;
        // 折扣
        if(marketPrice > 0 && currentPrice < marketPrice) {
          show.discount = Math.ceil(currentPrice / marketPrice * 100) / 10;
          if(show.tagType !== 1) { //组合商品信息1 > 折扣2
            show.tagType = 2;
          }
        } else {
          show.discount = null;
        }
      }

    }
  },1,604,11,2,15,3,4,25,6,5);
I$(430,function (_k, C, _ck, _ut, _, _v, _e, $, request, Module, _p, _o, _f, _r) {
    return {

      // skuVid改变了，更新各个组件
      selectSkuVid: function (dt) {
        var self = this, data = self.data,
          c_image = self._$find(C.C_IMAGE);

        var selVidList = dt.selVidList || [],
          allVidList = dt.allVidList || [],
          imageUrl = dt.imageUrl;

        // 修改主图
        if(imageUrl) {
          c_image.bigImg = imageUrl;
          c_image.selectIndex = -1;
        }

        // 设置各个sku属性的缺货样式
        self.__setPropStockOut();

        //
        self.changeSku(self.__getKey(selVidList, allVidList));
      },

      // 设置各个sku属性的缺货样式
      __setPropStockOut: function () {
        var self = this, data = self.data,
          c_skuprops = self._$find(C.C_SKUPROPS),
          c_buynum = self._$find(C.C_BUYNUM),
          skuInfo = c_skuprops.skuInfo,
          allVidList = skuInfo.allVidList,
          selVidList = skuInfo.selVidList,
          stockOutList;

        stockOutList = skuInfo.stockOutList = [];

        // 单sku商品
        if(!allVidList.length) return;

        //多sku商品
        allVidList.forEach(function (vids) {
          vids.forEach(function (vid) {
            if(stockOutList.indexOf(vid) === -1) {
              if(c_buynum._$getStore && c_buynum._$getStore(self.__getKey(selVidList, allVidList, vid)) === 0) {
                stockOutList.push(vid);
              }
            }
          });
        });

      },

      __getKey: function (selVidList, allVidList, addVid) {
        var vids = selVidList, ret;

        if(!!addVid) {
          // addVid 所属的属性行所有的vid
          var addPropVids = allVidList.filter(function (propVids) {
            return ~propVids.indexOf(addVid);
          })[0] || [];
          // 过滤掉 addVid 同属性的vid
          vids = vids.filter(function (selVid) {
            return !~addPropVids.indexOf(selVid);
          });
          vids = vids.concat([addVid]);
        }

        ret = vids.sort().join('_');
        return ret === '' ? ret : ('_' + ret);
      },

      // 切换sku，刷新各个组件
      changeSku: function (skuVid) {
        skuVid = skuVid || '';

        var self = this, data = self.data,
          skuList = self._$find(C.SKULIST) || [], //同步数据skuList
          fstSku = skuList[0] || {}, //第一条同步sku
          c_buynum = self._$find(C.C_BUYNUM),
          c_form = self._$find(C.C_FORM),
          titleData = self._$find(C.ASYNC_TITLEDATA),
          asku = self._$find(C.ASYNC_SKUVIDMAP)[skuVid], //异步数据sku
          sku = self._$find(C.SKUVIDMAP)[skuVid], //同步数据sku
          show = data.show,
          nosku = !asku || !sku,
          noGoods;

        if(!nosku) { // 选中某个sku

          // 设置当前的skuVid
          data.currentSkuVid = skuVid;

          // 切换预售信息（预售信息只在选中某sku时展示）
          data.show.preSaleInfo = asku.preSaleRemindStr || null;

        } else { // 未选中某个sku
          // 设置当前的skuVid
          data.currentSkuVid = '';
        }

        // 售价、参考价、折扣
        self.__updatePriceDiscount(
          nosku ? titleData.currentPrice : asku.currentPrice,
          nosku ? titleData.marketPrice : asku.marketPrice
        );

        // 表单隐藏域修改当前售价、skuId
        c_form.form.skuId = nosku ? (fstSku.skuId || '') : (asku.skuId || '');

        // 如果是预售，则隐藏次日达
        self.__updatePresale2TomorrowArr(nosku ? '' : skuVid);

        // 切换 大促、秒杀、特卖&限时购 提示条
        self.updatePromotionBar(nosku ? '' : skuVid);

        // 切换 促销标签
        self.updatePromotionTitle(nosku ? '' : skuVid);

        // 更新库存
        c_buynum._$skuChange && c_buynum._$skuChange(skuVid || '');

        // 新的vid下，是否缺货
        noGoods = c_buynum._$getStore && c_buynum._$getStore(skuVid || '') === 0;

        // 设置表单控件的按钮
        self.setGoodsBtns(noGoods, nosku);

        // 更新税费
        show.taxFeeMsg = nosku ? show.defTaxFeeMsg : show.taxFeeMsgMap[sku.skuId];

        // 更新 手机秒杀、手机专享
        self.updateToApp(nosku, sku, asku);

        // 初次修改sku（单sku商品也会执行）
        self.__firstChangeSkuFn(noGoods, nosku);

      },

      // 更新 手机秒杀、手机专享
      updateToApp: function (nosku, _sku, _asku) {
        var self = this,
          c_toapp = self._$find(C.C_TOAPP),
          appType = c_toapp.appType,
          askuIdMap = self._$find(C.ASYNC_SKUIDMAP) || {}, //异步数据skuIdMap
          skuList = self._$find(C.SKULIST) || []; //同步数据skuList

        if(!c_toapp.show || !appType) return; // 不展示

        var appOnlyAmounts = [], appTemaiAmounts = [];

        function prepAmounts(sku, asku) {
          if(parseFloat(asku.actualStorageStatus || 0) == 1 &&
            parseFloat(asku.currentStore || 0) > 0 &&
            parseFloat(sku.appOnlyPriceIncrement || 0) > 0) {
            appOnlyAmounts.push(parseFloat(asku.currentPrice) - parseFloat(sku.appOnlyPriceIncrement || 0));
          }
          if(parseFloat(sku.appTemaiPriceIncrement || 0) > 0) {
            appTemaiAmounts.push(parseFloat(asku.currentPrice) - parseFloat(sku.appTemaiPriceIncrement || 0));
          }
        }

        if(nosku) {
          skuList.forEach(function (sku) {
            prepAmounts(sku, askuIdMap[sku.skuId]);
          });
        } else {
          prepAmounts(_sku, _asku)
        }

        var prices = appType == 1 ? appTemaiAmounts : appOnlyAmounts;
        if(!prices.length) {
          c_toapp.priceHide = true;
          return;
        }
        c_toapp.priceHide = false;
        prices = prices.sort(function (a, b) {
          return parseFloat(a) - parseFloat(b);
        });
        c_toapp.price1 = prices[0];
        if(prices[0] != prices[prices.length - 1]) {
          c_toapp.price2 = prices[prices.length - 1];
        }
      },

      // 初次修改sku（单sku商品也会执行）
      __firstChangeSkuFn: function (noGoods, nosku) {
        if(this.data.__firstChangeSku) return;
        this.data.__firstChangeSku = true;

        var self = this,
          c_buynum = self._$find(C.C_BUYNUM),
          c_toapp = self._$find(C.C_TOAPP);

        // 判断是否展示手机秒杀、手机专享
        if(c_buynum._$getStoreAll && c_buynum._$getStoreAll() === 0){
          c_toapp.show = false;
        }

        // 触发head.js外部事件
        self.$emit('firstChangeSku', {
          noGoods: noGoods,
          nosku: nosku
        });
      }

    }
  },1,604,11,2,15,3,4,25,6,5);
I$(431,function (_k, C, _ut, _, _v, _e, $, request, Module, _p, _o, _f, _r) {
    return {

      // 更新 大促、秒杀、特卖&限时购，提示条
      updatePromotionBar: function (skuVid) {
        var self = this,
          c_promotionbar = self._$find(C.C_PROMOTIONBAR) || {},
          bsku, bar,
          fnList = ['__seckillInit', '__temaiInit', '__promotionInit'];

        if(!!skuVid) { //切换到sku
          if(c_promotionbar.skuList && c_promotionbar.skuList.length) {
            bsku = c_promotionbar.skuList.filter(function (bsku) {
              return bsku.skuVid === skuVid;
            });
            if(bsku.length) {
              bar = bsku[0].bars[0]
            }
          }
        } else if(c_promotionbar.defBars && c_promotionbar.defBars.length) {
          bar = c_promotionbar.defBars[0];
        }

        // 回收上一个组件
        c_promotionbar.recycle && c_promotionbar.recycle();

        if(bar){
          // 为显示对象赋值
          c_promotionbar.show = bar;
          // 调用对应的处理函数
          self[fnList[bar.type]]._$bind(self)(bar);
        }else{
          c_promotionbar.show = null;
        }
      },

      //处理秒杀
      __seckillInit: function (bar) {
        var self = this, data = self.data,
          show = data.show, //父组件展示对象
          c_promotionbar = self._$find(C.C_PROMOTIONBAR),
          c_form_btns = self._$find(C.C_FORM_BTNS),
          seckillBtn,
          _pageLoad = c_promotionbar.pageLoad || +(new Date()); //页面加载时间

        if(!bar) return;

        //秒杀按钮展示
        seckillBtn = show.seckillBtn = show.seckillBtn || {};
        seckillBtn.afterSelloutGoodsId = bar.afterSelloutGoodsId;

        var ms5 = 5 * 60 * 1000,
          ms15 = ms5 * 3,
          skip = 10, i = 0;

        // 状态：
        // 0 *月*日开抢
        // 1 明日开抢，或
        // 2 今日开抢：去掉「明日」文案
        // 3 进入15分内：隐藏「设置开抢提醒」
        // 4 进入5分内：开始倒计时，
        // 5 开始抢购：红色背景，立即秒杀按钮，去掉立即购买&加入购物车按钮（补充：先刷新页面）
        // 6 商品已抢光
        // 7 抢购结束：刷新页面
        var state = 0, tmpState = 0;

        //循环
        var _now, _nowMs, _isTomorrow, _isToday, _toStartMs, _toEndMs, hasInitS0 = false;

        function run() {
          //当前时间
          _now = new Date();
          _nowMs = +_now;

          //适当减少循环中非必须执行的逻辑
          if(i++ % skip == 0) {
            //活动是否在明日
            _isTomorrow = self.__isTomorrow(bar.startDate, _now);
            //活动是否在今日
            _isToday = bar.startDate.getMonth() == _now.getMonth() && bar.startDate.getDate() == _now.getDate();
            if(i > 999999) i = 0;
          }

          //活动距离开始时间，毫秒
          _toStartMs = bar.toStartMs - (_nowMs - _pageLoad);
          //活动距离结束时间，毫秒
          _toEndMs = bar.toEndMs - (_nowMs - _pageLoad);

          //状态判断
          state = 0;
          if(_isTomorrow) {
            state = 1;
          }
          if(_isToday) {
            state = 2;
          }
          if(_toStartMs <= ms15 && _toStartMs > ms5) {
            state = 3;
          } else if(_toStartMs <= ms5 && _toStartMs > 0) {
            state = 4;
          } else if(_toStartMs <= 0 && _toEndMs > 0) {
            state = 5;
            //判断当前秒杀是否已没有库存（秒杀不支持多sku）
            if(bar.isSoldOut) state = 6;
          } else if(_toEndMs <= 0) {
            state = 7;
          }

          var tmpData = {
            toStartMs: _toStartMs,
            toEndMs: _toEndMs,
            itv: bar.itv
          };

          bar.step = state;

          //å¦‚æžœçŠ¶æ€æŽ¨è¿›ï¼ˆå¦‚ 1->2ï¼‰
          if(state == 0) {
            !hasInitS0 && logics[state](tmpData);
            hasInitS0 = true;
          } else if(state > tmpState) {
            //å¦‚æžœç”±4->5ã€ç”±4->6ï¼Œé‚£ä¹ˆåˆ·æ–°é¡µé¢ï¼Œå¦‚æžœç›´æŽ¥åˆ¤æ–­ä¸º5æˆ–6ï¼Œåˆ™ä¸åˆ·æ–°
            if((tmpState == 4 && state == 5) || (tmpState == 4 && state == 6)) {
              window.location.reload();
              tmpState = state;
              return;
            }
            tmpState = state;
            logics[state](tmpData);
          } else if(state == tmpState) {
            //å¦åˆ™æ‰§è¡Œå¯¹åº”çŠ¶æ€ä¸‹çš„å€’è®¡æ—¶
            logics[state + 'itv'] && logics[state + 'itv'](tmpData);
          }
          self.$update();
        }

        //var tmpCurrentPrice = show.currentPrice; //ä¸´æ—¶ç¼“å­˜å”®ä»·
        //å„ç§çŠ¶æ€å¯¹åº”é€»è¾‘
        var logics = {
          0: function () {
            bar.showTime = self.__dig2(bar.startDate.getMonth() + 1) + "æœˆ" + self.__dig2(bar.startDate.getDate()) + "æ—¥" +
              self.__dig2(bar.startDate.getHours()) + ":" + self.__dig2(bar.startDate.getMinutes());
            show.seckillPrice = ''; //ç§’æ€ä»·
            show.proPrice = ''; //æŠ¢è´­ä»·
            if(!bar.isCanBuy) {//ç§’æ€æœŸé—´ä¸å¯è´­ä¹°
              seckillBtn.show = true;
              //$allBtns.addClass("f-seckillhide");// éšè—ï¼šè´­ä¹°æŒ‰é’®ã€åŠ å…¥è´­ç‰©è½¦æŒ‰é’®ã€æš‚æ—¶ç¼ºè´§ã€åˆ°è´§é€šçŸ¥ã€åŽ»æ´»åŠ¨é¡µé¢†å–
              seckillBtn.wait2Buy = 'æ•¬è¯·æœŸå¾…';
              //$(".j-seckillAbout2Begin").show();
            } else {//ç§’æ€æœŸé—´å¯è´­ä¹°ï¼Œéœ€è¦è€ƒè™‘å•†å“ç¼ºè´§ï¼Œä½†æ´»åŠ¨åº“å­˜è¿˜æœ‰çš„æƒ…å†µ
              seckillBtn.show = false;
              seckillBtn.preSale = true; //ç§’æ€å¤„åœ¨é¢„çƒ­æœŸ
              //initNoGoods();
            }
          },
          1: function () {
            this[0]();
            bar.showTime = "æ˜Žæ—¥" + self.__dig2(bar.startDate.getHours()) + ":" + self.__dig2(bar.startDate.getMinutes());
          },
          2: function () {
            this[1]();
            bar.showTime = self.__dig2(bar.startDate.getHours()) + ":" + self.__dig2(bar.startDate.getMinutes());
          },
          3: function () {
            this[2]();
            if(!bar.isCanBuy) {//ç§’æ€æœŸé—´ä¸å¯è´­ä¹°
              seckillBtn.wait2Buy = 'å³å°†å¼€å§‹';
              //$(".j-seckillAbout2Begin").text("å³å°†å¼€å§‹");
            }
          },
          4: function () {
            this[3]();
          },
          '4itv': function (tmpData) {
            var _delta = Math.max(tmpData.toStartMs, 0),
              txt = _.millisecond2LeftTime(_delta, true);
            bar.timer3.min = txt.mm;
            bar.timer3.sec = txt.ss;
            bar.timer3.milsec = ('000' + _delta).slice(-3, -2);
          },
          5: function () {
            this[4]();
            show.seckillPrice = bar.price; //ç§’æ€ä»·
            //$priceTitle.text("ç§’æ€ä»·");
            c_form_btns.buyNowBtnStr = 'ç«‹å³ç§’æ€';
            seckillBtn.show = false;
            seckillBtn.preSale = false; //ç§’æ€ä¸åœ¨é¢„çƒ­æœŸ
            //ç«‹å³è´­ä¹°->ç«‹å³ç§’æ€
            //$buybtns.removeClass("f-seckillhide").addClass("buynowonly").text("ç«‹å³ç§’æ€");
            c_form_btns.hideAdd2CartBtn = true;
            //åŽ»æŽ‰åŠ å…¥è´­ç‰©è½¦æŒ‰é’®
            //$addCarts.addClass("f-seckillhide");
            if(!bar.isCanBuy) {//ç§’æ€æœŸé—´ä¸å¯è´­ä¹°
              if(bar.price >= 0 && bar.marketPrice > 0) {
                // å”®ä»·ã€å‚è€ƒä»·ã€æŠ˜æ‰£
                self.__updatePriceDiscount(bar.price, bar.marketPrice);
              // åœ¨ update_viewã€init_view ä¸­çš„ Core.__refreshDiscountMarketprice ä¹‹åŽæ‰§è¡Œï¼Œä»Žè€Œè¦†ç›–
              //Core.__refreshDiscountMarketprice(price, marketPrice);
              }
              seckillBtn.wait2Buy = false;
              //$(".j-seckillAbout2Begin").hide();
              //initNoGoods();//ç§’æ€æœŸé—´ä¸å¯è´­ä¹°æ¨¡å¼ï¼Œåœ¨ç§’æ€æœŸé—´ï¼Œä¹Ÿè¦è€ƒè™‘å•†å“åº“å­˜0ï¼Œæ´»åŠ¨åº“å­˜è¿˜æœ‰çš„æƒ…å†µ
            } else {
              //if(hasNoGoods) { // å•†å“ç¼ºè´§ & ç§’æ€æœŸé—´å¯è´­ä¹°  ä¸å±•ç¤ºè´­ä¹°æŒ‰é’®
              //  $buybtns.addClass("f-seckillhide");
              //}
            }
            // å¤§æŒ‰é’®ä¿®æ”¹ä¹‹åŽï¼Œè§¦å‘å°æŒ‰é’®åŒæ­¥ä¿®æ”¹
            self.$emit('btnChange', {
              formBtns: c_form_btns,
              showSeckillBtn: show.seckillBtn && show.seckillBtn.show
            });
          },
          '5itv': function (tmpData) {
            var _delta = Math.max(tmpData.toEndMs, 0),
              txt = _.millisecond2LeftTime(_delta, true);
            bar.timer4.dayHide = txt.dd == '00';
            bar.timer4.day = txt.dd;
            bar.timer4.hour = txt.hh;
            bar.timer4.min = txt.mm;
            bar.timer4.sec = txt.ss;
            bar.timer4.milsec = ('000' + _delta).slice(-3, -2);
          },
          6: function (tmpData) {
            clearInterval(tmpData.itv);
            if(!bar.isCanBuy) {//ç§’æ€æœŸé—´ä¸å¯è´­ä¹°
              seckillBtn.show = true;
              seckillBtn.soldOut = true;
              seckillBtn.wait2Buy = false;
              //$allBtns.addClass("f-seckillhide"); // éšè—ï¼šè´­ä¹°æŒ‰é’®ã€åŠ å…¥è´­ç‰©è½¦æŒ‰é’®ã€æš‚æ—¶ç¼ºè´§ã€åˆ°è´§é€šçŸ¥ã€åŽ»æ´»åŠ¨é¡µé¢†å–
              //$(".j-seckillAbout2Begin").hide();
              //$(".j-seckillToBuy").show();
            } else {//ç§’æ€æœŸé—´å¯è´­ä¹°ï¼Œéœ€è¦è€ƒè™‘å•†å“ç¼ºè´§ï¼Œä½†æ´»åŠ¨åº“å­˜è¿˜æœ‰çš„æƒ…å†µ
              seckillBtn.show = false;
              //initNoGoods();
            }
          },
          7: function (tmpData) {
            clearInterval(tmpData.itv);
            window.location.reload();
          }
        };

        bar.itv = setInterval(run, 100);
        run();

        //å›žæ”¶ç»„ä»¶
        c_promotionbar.recycle = function () {
          clearInterval(bar.itv);
          seckillBtn.show = false;
          seckillBtn.soldOut = false;
          seckillBtn.wait2Buy = false;
          //show.currentPrice = tmpCurrentPrice;
          show.seckillPrice = ''; //ç§’æ€ä»·
          show.proPrice = ''; //æŠ¢è´­ä»·
          c_form_btns.buyNowBtnStr = '';
          c_form_btns.hideAdd2CartBtn = false;
          //$priceTitle.text("å”®ä»·");
          //$buybtns.text("ç«‹å³è´­ä¹°");
          //isShowCart && $buybtns.removeClass("buynowonly");
          //$addCarts.removeClass("f-seckillhide");
          //$allBtns.removeClass("f-seckillhide"); // æ¢å¤ï¼ˆä¸æ˜¯æ˜¾ç¤ºï¼‰ï¼šè´­ä¹°æŒ‰é’®ã€åŠ å…¥è´­ç‰©è½¦æŒ‰é’®ã€æš‚æ—¶ç¼ºè´§ã€åˆ°è´§é€šçŸ¥ã€åŽ»æ´»åŠ¨é¡µé¢†å–
          //$injectBtns.html('');
          if(!bar.isCanBuy) {//ç§’æ€æœŸé—´ä¸å¯è´­ä¹°
            //$(".j-seckillAbout2Begin, .j-seckillToBuy").hide();
          }
          // å¤§æŒ‰é’®ä¿®æ”¹ä¹‹åŽï¼Œè§¦å‘å°æŒ‰é’®åŒæ­¥ä¿®æ”¹
          self.$emit('btnChange', {
            formBtns: c_form_btns,
            showSeckillBtn: show.seckillBtn && show.seckillBtn.show
          });
          delete c_promotionbar.recycle;
        }._$bind(self);

      },

      //å¤„ç†ç‰¹å–/é™æ—¶è´­
      __temaiInit: function (bar) {
        var self = this, data = self.data,
          show = data.show, //çˆ¶ç»„ä»¶å±•ç¤ºå¯¹è±¡
          c_promotionbar = self._$find(C.C_PROMOTIONBAR),
          seckillBtn,
          _pageLoad = c_promotionbar.pageLoad || +(new Date()); //é¡µé¢åŠ è½½æ—¶é—´

        if(!bar) return;

        //ç§’æ€æŒ‰é’®å±•ç¤º
        seckillBtn = show.seckillBtn = show.seckillBtn || {};

        //domèµ‹å€¼
        var titleArr = bar.promotionTitle.split('-'),
          hasSplit = titleArr.length > 1;
        if(hasSplit) {
          bar.title = titleArr[0];
          bar.msg = titleArr[1];
        } else {
          bar.title = null;
          bar.msg = titleArr[0];
        }

        var ms5 = 5 * 60 * 1000,
          ms15 = ms5 * 3,
          skip = 10, i = 0;

        // 状态：
        // 0 *月*日开抢
        // 1 明日开抢
        // 2 今日开抢
        // 3 进入15分内：隐藏「设置开抢提醒」
        // 4 进入5分内：开始倒计时，
        // 5 开始抢购：红色背景（补充：刷新页面）
        // 6 抢购结束：刷新页面
        var state = 0, tmpState = 0;

        //循环
        var _now, _nowMs, _isTomorrow, _isToday, _toStartMs, _toEndMs, hasInitS0 = false;

        function run() {
          //当前时间
          _now = new Date();
          _nowMs = +_now;

          //适当减少循环中非必须执行的逻辑
          if(i++ % skip == 0) {
            //活动是否在明日
            _isTomorrow = self.__isTomorrow(bar.startDate, _now);
            //活动是否在今日
            _isToday = bar.startDate.getMonth() == _now.getMonth() && bar.startDate.getDate() == _now.getDate();
            if(i > 999999) i = 0;
          }

          //活动距离开始时间，毫秒
          _toStartMs = bar.toStartMs - (_nowMs - _pageLoad);
          //活动距离结束时间，毫秒
          _toEndMs = bar.toEndMs - (_nowMs - _pageLoad);

          //状态判断
          state = 0;
          if(_isTomorrow) {
            state = 1;
          }
          if(_isToday) {
            state = 2;
          }
          if(_toStartMs <= ms15 && _toStartMs > ms5) {
            state = 3;
          } else if(_toStartMs <= ms5 && _toStartMs > 0) {
            state = 4;
          } else if(_toStartMs <= 0 && _toEndMs > 0) {
            state = 5;
          } else if(_toEndMs <= 0) {
            state = 6;
          }

          var tmpData = {
            toStartMs: _toStartMs,
            toEndMs: _toEndMs,
            itv: bar.itv
          };

          bar.step = state;

          //如果状态推进（如 1->2）
          if(state == 0) {
            !hasInitS0 && logics[state](tmpData);
            hasInitS0 = true;
          } else if(state > tmpState) {
            if(state == 5 && tmpState == 4) {//如果由4->5，那么刷新页面
              window.location.reload();
              tmpState = state;
              return;
            }
            tmpState = state;
            logics[state](tmpData);
          } else if(state == tmpState) {
            //否则执行对应状态下的倒计时
            logics[state + 'itv'] && logics[state + 'itv'](tmpData);
          } else {
            logics['6'](tmpData);
          }
          self.$update();

        }

        //各种状态对应逻辑
        var logics = {
          0: function () { // **月**日
            bar.showTime = self.__dig2(bar.startDate.getMonth() + 1) + "月" + self.__dig2(bar.startDate.getDate()) + "日" +
              self.__dig2(bar.startDate.getHours()) + ":" + self.__dig2(bar.startDate.getMinutes());
            show.seckillPrice = ''; //秒杀价
            show.proPrice = ''; //抢购价
            //$(".m-price-wrap .m-price-title").text("售价");
            bar.remindStr = ['', '开抢提醒', '开场提醒我'][bar.temaiType || 0];
            seckillBtn.preSale = true; //秒杀处在预热期
          },
          1: function () { // 明日
            this[0]();
            bar.showTime = "明日" + self.__dig2(bar.startDate.getHours()) + ":" + self.__dig2(bar.startDate.getMinutes());
          },
          2: function () { // 今日
            this[1]();
            bar.showTime = "今日" + self.__dig2(bar.startDate.getHours()) + ":" + self.__dig2(bar.startDate.getMinutes());
          },
          3: function () {
            this[2]();
          },
          4: function () {
            this[3]();
          },
          '4itv': function (tmpData) {
            var _delta = Math.max(tmpData.toStartMs, 0),
              txt = _.millisecond2LeftTime(_delta, true);
            bar.timer3.min = txt.mm;
            bar.timer3.sec = txt.ss;
            bar.timer3.milsec = ('000' + _delta).slice(-3, -2);
          },
          5: function () {
            this[4]();
            show.proPrice = bar.price; //抢购价
            seckillBtn.preSale = false; //秒杀不在预热期
            //$(".m-price-wrap .m-price-title").text("抢购价");
          },
          '5itv': function (tmpData) {
            var _delta = Math.max(tmpData.toEndMs, 0),
              txt = _.millisecond2LeftTime(_delta, true);
            bar.timer4.dayHide = txt.dd == '00';
            bar.timer4.day = txt.dd;
            bar.timer4.hour = txt.hh;
            bar.timer4.min = txt.mm;
            bar.timer4.sec = txt.ss;
            bar.timer4.milsec = ('000' + _delta).slice(-3, -2);
          },
          6: function (tmpData) {
            clearInterval(tmpData.itv);
            window.location.reload();
          }
        };

        bar.itv = setInterval(run, 100);
        run();

        //回收组件
        c_promotionbar.recycle = function () {
          clearInterval(bar.itv);
          show.seckillPrice = ''; //秒杀价
          show.proPrice = ''; //抢购价
          //$(".m-price-wrap .m-price-title").text("售价");
          delete c_promotionbar.recycle;
        }._$bind(self);

      },

      //处理大促
      __promotionInit: function (bar) {
        var self = this, data = self.data,
          c_promotionbar = self._$find(C.C_PROMOTIONBAR),
          systime = data.kaolaSystemTime;

        bar.isHide = true;

        if(!bar || (bar && !bar.dachuStartTime)) return;

        var startTime = bar.dachuStartTime || '',
          endTime = bar.endTime || '',
          startTimeMills = +_ut._$var2date(startTime),
          endTimeMills = +_ut._$var2date(endTime);

        if(!startTime || !endTime || systime >= endTimeMills) return;

        bar.isHide = false;

        bar.notBegin = systime < startTimeMills;

        c_promotionbar.recycle = function () {
          bar.isHide = true;
          delete c_promotionbar.recycle;
        }._$bind(self);

      },


      // 是否在明日
      __isTomorrow: function (startDate, nowDate) {
        var tomorrowDate = new Date(+nowDate + 1000 * 60 * 60 * 24);
        return tomorrowDate.getDate() == startDate.getDate();
      },

      ////根据毫秒数计算剩余时间
      //__getTimeDescription: function (num, returnObj) {
      //  var time = +num > 0 ? +num : 0,
      //  //刻度
      //    onemin = 60000, onehour = 60 * onemin, oneday = 24 * onehour,
      //  //转化为两位数字
      //    fillZ = function (N) {
      //      return (N < 10 ? "0" : "" ) + N;
      //    };
      //  var d = Math.floor(time / oneday),
      //    h = Math.floor(time % oneday / onehour),
      //    m = Math.floor(time % oneday % onehour / onemin),
      //    s = Math.floor(time % oneday % onehour % onemin / 1000);
      //  //优化临界点显示
      //  if(d == 1 && h == 0) {
      //    d = 0;
      //    h = 24;
      //  }
      //  var info = [fillZ(d), fillZ(h), fillZ(m), fillZ(s)];
      //  return returnObj ? {
      //    d: d, h: h, m: m, s: s,
      //    dd: info[0], hh: info[1], mm: info[2], ss: info[3]
      //  } : info;
      //},

      __dig2: function (str) {
        return (str + '').length == 1 ? '0' + str : str;
      }

    }
  },1,604,2,15,3,4,25,6,5);
I$(432,function (_k, C, _ut, _, _u, _v, _e, $, request, LoginWindow, Module, _p, _o, _f, _r) {
    return {
      // 更新 活动标签、考拉豆/优惠券标签、税费补贴标签
      updatePromotionTitle: function (skuVid) {
        var self = this, data = self.data,
          rootShow = data.show,
          goods = data.goods,
          c_promotiontitle = self._$find(C.C_PROMOTIONTITLE) || {},
          couponTips = c_promotiontitle.couponTips || [],
          isShowCoupon = c_promotiontitle.canUseCoupon === 1 && couponTips.length, //是否展示优惠券
          titleData = self._$find(C.ASYNC_TITLEDATA) || {},
          aSkuList = self._$find(C.ASYNC_SKULIST) || [], //异步skuList
          show,
          asku;

        // 读取缓存
        //var cache = self.__cachePromotionTitle(skuVid);
        //if(cache) {
        //  c_promotiontitle.show = cache;
        //  self.__updateGiftList();
        //  return;
        //}

        show = c_promotiontitle.show;
        show.promotions = [];
        show.giftList = [];

        if(!!skuVid && !!aSkuList[skuVid]) {
          asku = aSkuList[skuVid];
        } else {
          asku = titleData;
        }

        //单品1、整单2、单品包税3、买赠4
        self.__dealPromotionTitle(asku, 'danpinPromotion', 1,
          function dpFilter(title, desc, link) {
            // 秒杀、特卖、限时购、税费补贴 拦截掉，其中税费补贴放到税费栏，其他不做处理
            return title.indexOf('限时购') === 0 ||
              title.indexOf('特卖') === 0 ||
              title.indexOf('秒杀') === 0 ||
              self.__dealTaxSubsidy(title, desc, link, rootShow); //税费补贴
          });
        self.__dealPromotionTitle(asku, 'zhendanPromotion', 2,
          function dpFilter(title, desc, link) {
            // 税费补贴 拦截掉，放到税费栏
            return self.__dealTaxSubsidy(title, desc, link, rootShow); //税费补贴
          }, function dpDeal(tag) {
            // 对于 整单 + 商品隐藏购物车 + 链接为凑单页 => 不展示整单ms配置的链接
            if(!!tag.link && goods.isShowCart == 0 && /.*\/activity\/goods\/\w+\.html/.test(tag.link)){
              tag.link = '';
            }
          });
        self.__dealPromotionTitle(asku, 'dpReduceTaxPromotion', 3,
          function dpFilter(title, desc, link) {
            // 税费补贴 拦截掉，放到税费栏
            return self.__dealTaxSubsidy(title, desc, link, rootShow); //税费补贴
          });

        self.__dealPromotionTitle(asku, 'maizengPromotion', 4,
          function mzFilter(title, desc, link) {
            return !(asku.maizengGiftList || []).length;
          }, function mzDeal(tag) {
            tag.giftList = asku.maizengGiftList || [];
            tag.giftList.forEach(function (gift) {
              gift.hasGiftStore = !!gift.giftStore && gift.giftStore > 0;
            });
            //表单隐藏域增加当前sku下的赠品数据
            show.giftList = tag.giftList || [];
            self.__updateGiftList();
          });

        //税费返券5
        if(asku.taxCouponStr) {
          show.promotions.push({
            type: 5,
            title: '返券',
            link: asku.taxCouponLink || '',
            desc: asku.taxCouponStr
          });
        }

        //考拉豆抵扣、优惠券，放在「价格与手机专享/秒杀」下方
        self.__kaolaBeanAndCoupon(asku, rootShow, isShowCoupon, couponTips);


        // 存储缓存
        //self.__cachePromotionTitle(skuVid, show);

      },

      // 更新 giftList 到 c_form 表单隐藏域
      __updateGiftList: function () {
        var self = this,
          c_promotiontitle = self._$find(C.C_PROMOTIONTITLE) || {},
          c_form = self._$find(C.C_FORM);
        var oldList = c_form.form.giftList,
          newList = c_promotiontitle.show.giftList || [];
        newList.forEach(function (gift, idx) {
          oldList[idx] = gift;
        });
        oldList.splice(newList.length, oldList.length);
      },

      //考拉豆抵扣、优惠券数据
      __kaolaBeanAndCoupon: function (asku, rootShow, isShowCoupon, couponTips) {

        //考拉豆抵扣
        this.__dealPromotionTitle(asku, 'kaolaBeanPromotion', -1, function (title, desc, link) {
          // 考拉豆抵扣数据
          rootShow.kaolaBean = {
            title: title,
            link: link,
            desc: desc
          };
          //拦截掉，不做处理
          return true;
        });

        //优惠券
        if(isShowCoupon) {
          rootShow.coupon = {
            couponList: couponTips || []
          };
          if(couponTips.length){
            _.daEvent('商品详情页', '优惠券', '出现');
          }
        }
      },

      //税费补贴数据
      __dealTaxSubsidy: function (title, desc, link, rootShow) {
        if(title.indexOf('税费补贴') === 0) { //税费补贴将在「税费栏」展示
          rootShow.taxSubsidy = {
            title: title,
            link: link,
            desc: desc
          };
          return true;
        }
        return false;
      },

      // 存储/读取缓存
      //__cachePromotionTitle: function (skuVid, show) {
      //  var _cache = this.data._$components.c_promotiontitle._cache;
      //  if(!show){
      //    return !!skuVid ? _cache.skuVidObj[skuVid] : _cache.def;
      //  }
      //  if(!!skuVid) {
      //    _cache.skuVidObj[skuVid] = show;
      //  } else {
      //    _cache.def = show;
      //  }
      //},

      // 促销标签通用数据处理
      __dealPromotionTitle: function (asku, keyword, type, filterFn, dealFn) {
        var title = asku[keyword + 'Title'] || asku[keyword + 'TitleLink'],
          link = asku[keyword + 'Link'],
          desc, td, tag;

        if(!title) return;

        td = title.split('-');
        title = td[0] || '';
        desc = td[1] || '';

        //拦截
        if(filterFn && filterFn(title, desc, link)) return;

        tag = {
          type: type,
          title: title,
          link: link,
          desc: desc
        };

        //特殊逻辑处理
        dealFn && dealFn(tag);

        this.data._$components.c_promotiontitle.show.promotions.push(tag);
      },
      // 展示全部优惠券
      showCouponEnter: function (coupon, showAll) {
        clearTimeout(coupon._sto);
        coupon._sto = this.$timeout(function () {
          coupon.showAll = !!showAll;
        }, 100);
      },
      // 隐藏优惠券，只展示一条
      showCouponLeave: function (coupon) {
        clearTimeout(coupon._sto);
        coupon._sto = this.$timeout(function () {
          coupon.showAll = false;
        }, 100);
      },
      // 领取优惠券
      getCoupon: function (param) {
        var self = this,
          schemeId = param.schemeId,
          available = param.available;

        if(!schemeId) return;

        _.daEvent('商品详情页', '优惠券', '点击领取', {couponId: schemeId});

        var linkStr = '<a href="/personal/my_coupon.html" class="mycoupon color-red" target="_blank">' + '去我的优惠券查看 &gt;' + '</a>';
        var availHtml = '';
        if(available) {
          availHtml = '您可以在' + available.from + '~' + available.to + '的活动使用该优惠券<br/>'
        }

        function coupon() {

          request('/antiSpamObtainCoupon.html', {
            method: 'POST',
            data: {schemeId: schemeId},
            type: 'json',
            norest: true,
            onload: function (json) {
              var retcode = json.retcode;
              if(retcode == 200) {
                _.daEvent('商品详情页', '优惠券', '领取成功', {couponId: schemeId});
                self._$dialog('领取优惠券', 'yes', '领取成功', availHtml + linkStr);
              } else if(retcode == -12) {
                self._$dialog('领取优惠券', 'notice', json.retdesc || '您已经领取了该优惠券', linkStr);
              } else if(retcode == -3 ||
                retcode == -8 ||
                retcode == -10 ||
                retcode == -19 ||
                retcode == -20 ||
                retcode == -22
              ) {
                self._$dialog('领取优惠券', 'notice', json.retdesc || '由于服务问题，领取失败', '');
              } else {
                self._$dialog('领取优惠券', 'fail', '领取失败', json.retdesc || '由于服务问题，领取失败');
              }
            },
            onerror: function () {
              self._$dialog('领取优惠券', 'fail', '领取失败', '由于服务问题，领取失败');
            }
          });
        }

        _u.afterLogin(function () {
          coupon();
        });

      }
    }
  },1,604,2,15,26,3,4,25,6,7,5);
I$(433,function (_k, C, _ut, _ck, _, _v, _e, $, request, Module, _p, _o, _f, _r) {
    return {
      // 展示/隐藏地址控件
      toggleAddrBox: function () {
        var c_addrbox = this._$find(C.C_ADDRBOX),
          toggleFn = c_addrbox._$toggle;
        toggleFn && toggleFn();
      },
      // 用户切换了收货地址
      distSelect: function (dt) {
        var self = this, data = self.data,
          show = data.show,
          goods = data.goods,
          province = dt.province,
          city = dt.city,
          district = dt.district;

        if(district && district.code) {
          if(!!province.isDirectCity || !city) { //直辖市
            show.addrMsg = province.shortName + district.name;
          } else { //非直辖市
            show.addrMsg = province.shortName+city.name+district.name;
          }

          //获取 邮费&次日达 信息
          //预售sku不展示次日达信息
          self.getPostage(goods.goodsId, city.code, district.code);
        }
      },

      // 获取数据
      //  1. 初始化运费文案
      //  2. 获取的收货地址，（通过回调函数）来重置地址控件的地址
      //  3. 初始化「次日达」数据（针对「服务」栏）
      getPostage: function (goodsId/*, resetLocFn 或者 , cityCode, districtCode*/) {
        var params = {goodsId: goodsId}, self = this,
          merchantDeliverStr, str,
          args = arguments,
          resetLocFn, cityCode, districtCode;

        if(_ut._$isFunction(args[1])) {
          resetLocFn = args[1];
        } else {
          cityCode = args[1];
          districtCode = args[2];
        }

        if(!!cityCode && !!districtCode) {
          params.cityCode = cityCode;
          params.districtCode = districtCode;
          //将选择的城市代码写入cookies
          _ck._$cookie('SHIPPING_TO_CITY_CODE_NEW', {
            value: cityCode,
            path: '/',
            domain: '.kaola.com',
            expires: 365
          });
        }

        request('/postage/get.html', {
          method: 'GET',
          data: params,
          type: 'json',
          onload: function (json) {
            if(json && json.retcode == 200 && json.postage) {
              if(json.shippingTo && json.shippingTo.code && _ut._$isFunction(resetLocFn)) {
                //将根据IP获取的城市代码写入cookies
                _ck._$cookie('SHIPPING_TO_CITY_CODE_NEW', {
                  value: json.shippingTo.code,
                  path: '/',
                  domain: '.kaola.com',
                  expires: 365
                });
                resetLocFn(json.shippingTo);
              }
              if(json.postage == '不配送') {
                self.data.show.postageMsg = '<strong class="notDeliver">该地区暂不支持配送</strong>';
              } else {
                //入驻商家发货
                merchantDeliverStr = !!json.merchantDeliverStr ? '&emsp;<span class="merchantdesc">' + json.merchantDeliverStr + '</span>' : '';
                if(!!json.postageDetail) {
                  str = '<span class="arron iconfont"></span><span class="arroff iconfont"></span>';
                  self.data.show.postageMsg = '<span class="u-postage"><i class="fee">' + json.postageShowStr + str + '</i><i class="desc">' + json.postageDetail + '</i></span>' + merchantDeliverStr;
                } else {
                  self.data.show.postageMsg = '<span class="postagedesc">' + json.postageShowStr + '</span>' + merchantDeliverStr;
                }
              }

              self.__tomorrowArrival(json); //更新次日达信息
            } else {
              err();
            }
          },
          onerror: err
        });

        function err() {
          self.data.show.postageMsg = '<strong>数据获取失败，请刷新页面重试</strong>';
        }

      },

      //更新次日达信息
      __tomorrowArrival: function (json) {
        var self = this, data = self.data,
          show = data.show;

        show.tomorrowArrival = {
          status: json.tomorrowArrivalStatus || 0, //次日达状态 0：不是次日达，1：第二天达，2：第三天达  3：物流时效 4：物流时效-海外仓
          show: (json.tomorrowArrivalStatus || 0) != 0, //是否展示
          defShow: (json.tomorrowArrivalStatus || 0) != 0, //是否展示
          divisionTimeStr: json.divisionTimeStr || '', //次日达分割时间 14:00
          arrivalTimeStr: json.arrivalTimeStr || '' //预计到达时间
        };


        // 如果是预售，则隐藏次日达
        self.__updatePresale2TomorrowArr(data.currentSkuVid || '');

        // 物流时效（非海外仓），固定分隔时间点为 24:00
        if(show.tomorrowArrival.status == 3) {
          show.tomorrowArrival.divisionTimeStr = '24:00';
        }

      },

      // 如果有预售则隐藏次日达信息
      __updatePresale2TomorrowArr: function (skuVid) {
        var self = this, data = self.data,
          show = data.show,
          skuList = self._$find(C.ASYNC_SKULIST),
          asku = self._$find(C.ASYNC_SKUVIDMAP)[skuVid];

        if(!show.tomorrowArrival) return;

        if((skuVid && asku && asku.preSaleRemindStr) || //选中的sku，有预售信息
          skuList.every(function (sku) {                    //未选中任何sku，但所有sku均有次日达信息
            return !!sku.preSaleRemindStr;
          })) {
          show.tomorrowArrival.show = false;
        }else{
          show.tomorrowArrival.show = show.tomorrowArrival.defShow;
        }
      }

    }
  },1,604,2,11,15,3,4,25,6,5);
I$(657,"<div class=\"m-arrivalmodal iDialogMain\">\n\t<div class=\"cnt\">\n\t    <div class=\"noticeText\">若该商品到货，您将收到手机短信通知，提醒您及时购买！</div>\n\t    <div class=\"phoneInput\">\n\t        <input {#if phoneNum=='请输入接收通知的手机号'}class=\"c_ccc\"{/if} type=\"text\" ref=\"phoneNum\" placeholder=\"请输入接收通知的手机号\" data-holder=\"请输入接收通知的手机号\" autocomplete=\"off\" on-blur={this.onPhoneNumBlur()} on-focus={this.onPhoneNumFocus()} r-model={phoneNum|integer} maxlength=13 />\n\t    </div>\n\t    {#if errorMsg}\n\t    <div class=\"phoneErr\">{errorMsg}</div>\n\t    {/if}\n\t</div>\n\t<div class=\"btnbar f-tac\">\n\t  <a class=\"btn\" href=\"javascript:void(0)\" on-click={this.confirm()}>设置到货通知</a>\n\t</div>\n</div>");
I$(605,function (ut, e,v,ut1, Modal, tpl,_j,dialogModal){
	var reg = new RegExp('(^1[3|4|5|7|8|]\\d{9}$)|(^1[3|4|5|7|8|][0-9]{1}[*]{4}[0-9]{4}$)');;
	/**
	 * goodsId	商品id
	 * skuId	skuId
	 */
	var NotifyModal = Modal.extend({
	    content:tpl,
	    data:{title:'到货提醒',width:520},
	    onPhoneNumFocus:function(){
	    	this.data.errorMsg ='';
	    },
	    init:function(){
	    	this.supr();
	    	
	    },
	    config:function(){
	    	var phoneNum = _j._$cookie('arrNotPho');
	    	if(phoneNum){
                this.data.phoneNum = phoneNum;
            } else{
            	this.data.phoneNum = '请输入接收通知的手机号';
            }
	    },
	    onPhoneNumBlur:function(){
	    	if(!this.data.phoneNum){
	    		this.data.errorMsg ='不能为空';
	    	}
	    	if(!reg.test(this.data.phoneNum)){
	    		this.data.errorMsg ='请填写正确的手机号码！';
	    	} else{
	    		this.data.errorMsg ='';
	    	}
	    },
	    onPhoneNumFocus:function(){
	    	if(this.data.phoneNum=='请输入接收通知的手机号'){
	    		this.data.phoneNum='';
	    	}
	    	this.data.errorMsg ='';
	    },
	    confirm: function(){
	    	if(reg.test(this.data.phoneNum)){
	    		this.$request('/stockreg.html',{
	    			data:{"email":window.account,"phoneNo":this.data.phoneNum,"goodsId":this.data.goodsId,"skuId":this.data.skuId},
	    			method:'POST',
	    			norest:true,
	    			onload:function(_json){
	    				if(_json.retcode===0){
	    					_j._$cookie('arrNotPho',{value:_json.result,path:"/",expires:365*10})
	    					this.$emit('confirm',_json);
	    					this.destroy();
	    					new dialogModal({data:{
	    						icon:'yes',
	    						text:'设置成功'
	    					}
	    					})
	    				} else if(_json.retcode==8){
	    					this.destroy();
	    					new dialogModal({
	    						data:{
	    							icon:'yes',
	    							text:'该邮箱或手机号已登记过该商品'
	    						}
	    					})
	    				} else{
	    					this.destroy();
	    					new dialogModal({data:{
	    						icon:'fail',
	    						text:'设置失败'
	    						}
	    					})
	    				}
	    			}._$bind(this)
	    		})
	    	} else{
	    		if(!this.data.phoneNum){
		    		this.data.errorMsg ='不能为空';
		    	}
		    	if(!reg.test(this.data.phoneNum)){
		    		this.data.errorMsg ='请填写正确的手机号码！';
		    	}
	    	}
	    }
	});

	// 绑定Modal
  	return NotifyModal;
},15,4,3,2,128,657,11,115);
I$(434,function (_k, C, _ut, _, _u, _ck, _v, _e, $, request, Confirm, notifyModal, LoginWindow, ScrollTo, Cart, Module, _p, _o, _f, _r) {
    return {
      // 立即购买
      buyNow: function () {
        var self = this, data = self.data,
          async = data._$async,
          btns = self._$find(C.C_FORM_BTNS),
          c_skuprops = self._$find(C.C_SKUPROPS),
          c_buynum = self._$find(C.C_BUYNUM),
          c_form = self._$find(C.C_FORM),
          buyNumber = c_buynum.show.number, // 数量
          skuId = c_form.form.skuId;

        if(btns.buyCartBtnDisable) return; // 按钮不可用
        if(!buyNumber || skuId == undefined) return; //
        if(!self.__checkSkuSel(c_skuprops, c_buynum)) { // 校验是否选中sku，且数量>0
          ScrollTo._$allocate({
            scrollTo: $('.j-skubox')[0],
            duration: 50,
            offset: -10,
            timing: 'easeinout'
          });
          return;
        }

        _u.isLogin(function (islogin) {
          if(!islogin) {
            LoginWindow._$allocate({
              logincallback: function () {
                self.refreshTopBar();
                prepareSubmit(false);
              }
            })._$show();
          } else {
            prepareSubmit(true);
          }
        });

        function prepareSubmit(islogin) {
          //非(由数量控件)限购的产品，直接跳过限购检查
          if(!c_buynum._$hasBuyLimit(skuId)) {
            checkPersonalLimitSubmit();
            return;
          }
          if(islogin) {
            checkLimitBuySubmit();
          } else {
            // 重新获取异步数据，并更正限购信息（数量组件）
            self.updateAsyncData(function () {
              checkLimitBuySubmit();
            });
          }
        }

        // 检查(由数量控件控制)的限购
        function checkLimitBuySubmit() {
          var limitInfo = c_buynum._$getLimitsInfo();
          var buycount = limitInfo.limitObj.bought,
            maxcount = limitInfo.maxQty,
            msg = '';
          if(limitInfo.limitObj.type !== 'account' && limitInfo.limitObj.type !== 'daily') {
            checkPersonalLimitSubmit(); //如果不是此2中限购类型，可以直接返回了；
            return;
          }
          if(!isNaN(buycount) && !isNaN(maxcount)) {
            if(maxcount >= buyNumber) {
              checkPersonalLimitSubmit(); //仅仅可以往后走时，才调用回调函数，否则终止执行
              return;
            }
            if(limitInfo.limitObj.type === 'account') {
              if(maxcount > 0) {
                msg = '抱歉，这件商品每人最多可购买<span class="xiangou-txt-qty"> ' + (buycount + maxcount) +
                  ' </span>，您已经购买了<span class="xiangou-txt-qty"> ' + buycount +
                  ' </span>件, 只能再购买<span class="xiangou-txt-qty"> ' + maxcount + ' </span>件哦~';
              } else {
                msg = '抱歉，这件商品每人最多可购买<span class="xiangou-txt-qty"> ' + (buycount + maxcount) +
                  ' </span>件哦~您已经购买了<span class="xiangou-txt-qty"> ' + (buycount + maxcount) + ' </span>件, 不能再购买了。';
              }
            } else if(limitInfo.limitObj.type === 'daily') {
              msg = '抱歉，此商品单日限购<span class="xiangou-txt-qty"> ' + (buycount + maxcount) +
                ' </span>件，您单日已购买<span class="xiangou-txt-qty"> ' + buycount +
                ' </span>件, 超出限购了哦~~';
            }
            new Confirm({
              data: {
                width: 520,
                title: '提示',
                content: '<i class="iconfont main-icon notice" r-html="{\'&#xe609;\'}"></i>' + msg,
                clazz: 'm-dialogalert z-mid',
                txtOk: '知道了',
                hideCCBtn: true
              }
            });
          }
        }

        // 检查 个人物品清关 限购
        //  - 限购控件规则不变，增加额外限购情况：根据后台配置的类目进行限购
        //  - 目前仅限「个人清关模式仓库下的商品」，且存在「个人清关模式限购数量」
        function checkPersonalLimitSubmit() {
          if(!async.personalCustom || !async.personalCustom.skuVidMap) submit();
          var pCustom = async.personalCustom, pskuVidMap = pCustom.skuVidMap;
          var perCust = pskuVidMap[data.currentSkuVid] || pCustom || {};
          var isPer = parseInt(perCust.isPersonalCustom || 0),
            limitBuy = parseInt(perCust.personalCustomLimitBuyCount || 0),
            infoStr = perCust.personalCustomInfoStr || '';
          if(isPer == 1 && buyNumber > limitBuy) {
            c_buynum.show.number = limitBuy;
            c_buynum._$blur();
            new Confirm({
              data: {
                width: 520,
                title: '提示',
                content: '\
                     <div class="noticeText">' + infoStr + '</div>\
                     <div class="noticeText">您已超限，请分开购买哦~</div>\
                     ',
                clazz: 'm-limitBuyTipsPop',
                txtOk: '知道了',
                hideCCBtn: true
              }
            });
            return;
          }
          submit();
        }

        // 表单提交
        function submit() {
          _ck._$cookie('NTES_KAOLA_ORDER_FLAG_NEW', {
            value: '1',
            path: '/',
            domain: '.kaola.com'
          });
          c_form.$formEl && c_form.$formEl.submit();
        }

      },
      // 加入购物车
      add2Cart: function (event) {
        var self = this, data = self.data,
          btns = self._$find(C.C_FORM_BTNS),
          c_skuprops = self._$find(C.C_SKUPROPS),
          c_buynum = self._$find(C.C_BUYNUM),
          c_form = self._$find(C.C_FORM),
          c_image = self._$find(C.C_IMAGE),
          number = c_buynum.show.number, // 数量
          skuId = c_form.form.skuId; // skuId

        if(btns.buyCartBtnDisable) return; // 按钮不可用
        if(!number || skuId == undefined) return; //
        if(!self.__checkSkuSel(c_skuprops, c_buynum)) { // 校验是否选中sku，且数量>0
          ScrollTo._$allocate({
            scrollTo: $('.j-skubox')[0],
            duration: 50,
            offset: -10,
            timing: 'easeinout'
          });
          return;
        }

        var goods = data.goods,
          isHKNourishmentCategory = goods.isHKNourishmentCategory; // 属于保健品（在hk域下）

        if(window.user) {
          checkLoginCb(true);
        } else {
          _u.isLogin(function (islogin) {
            checkLoginCb(!!islogin);
          });
        }

        function checkLoginCb(islogin) {
          if(!islogin && isHKNourishmentCategory) { // 未登录 + 保健品 => 先登录
            LoginWindow._$allocate({
              logincallback: function () {
                self.refreshTopBar();
                __add2Cart(true);
              }
            })._$show();
            return;
          }
          __add2Cart(islogin);
        }

        function __add2Cart(islogin, timeout) {
          timeout = timeout || 0;
          data.__addCart = data.__addCart || Cart._$allocate();
          self.$timeout(function () {
            data.__addCart._$addCart({
              islogin: islogin,
              count: number,
              goodsId: goods.goodsId || 0,
              skuId: skuId,
              source: data.innerSource || 'OTHER'
            }, {
              from: event.target,
              imageUrl: c_image.bigImg
            });
          }, timeout);
        }

      },
      // 校验是否选中sku，且数量>0
      __checkSkuSel: function (c_skuprops, c_buynum) {
        var skuInfo =   c_skuprops.skuInfo,
          allVidList = skuInfo.allVidList,
          selVidList = skuInfo.selVidList;
        var skuSelected = allVidList.length === 0 || //单sku无需选择vid属性
          (allVidList.length > 0 && selVidList.length === allVidList.length); //多sku，且所有属性均已选择

        if(!skuSelected){
          c_skuprops.hasErr = true;
          return false;
        } else if(!c_buynum.show.number){
          //c_skuprops.hasErr = true;
          c_buynum._$blur();
          return false;
        } else {
          c_skuprops.hasErr = false;
          return true;
        }
      },
      // 到货通知
      arrivalNotice: function () {
        var c_form = this._$find(C.C_FORM),
          goodsId = c_form.goods.goodsId,
          skuId = c_form.form.skuId;
        if(!skuId || !goodsId) return;
        _u.afterLogin(function () {
          new notifyModal({data: {
            title: '到货通知',
            goodsId: goodsId,
            skuId: skuId
          }}).$inject(document.body);
        });
      },
      // 滚动到并查看评论
      scroll2Comment: function (dapush) {
        //{type:1,category:'商品详情页',event:'评价',label:''}
        dapush && _.daEvent(dapush.category || '商品详情页', dapush.event || '评价', dapush.label || '');
        this.$emit('scroll2Comment', dapush || {});
      },
      // 大按钮修改之后，触发小按钮同步修改
      btnChange: function () {
        var self = this,
          show = self.data.show;
        self.$emit('btnChange', {
          formBtns: self._$find(C.C_FORM_BTNS),
          showSeckillBtn: show.seckillBtn && show.seckillBtn.show
        });
      },
      // 设置表单控件的按钮
      setGoodsBtns: function (noGoods, nosku) {
        var self = this, data = self.data,
          show = data.show,
          goods = data.goods,
          btns = self._$find(C.C_FORM_BTNS);

        // 缺货按钮
        btns.noGoodsBtn = !!noGoods;
        btns.buyNowBtn = !noGoods;

        // 到货通知按钮：（1、没有sku属性；2、已选中了某个sku）且 已经缺货（配合 btns.noGoodsBtn）
        btns.arrivalNoticeBtn = ((goods.skuGoodsPropertyList || []).length == 0) || !nosku;

        // 大按钮修改之后，触发小按钮同步修改
        self.$emit('btnChange', {
          formBtns: btns,
          showSeckillBtn: show.seckillBtn && show.seckillBtn.show
        });

      }
    }
  },1,604,2,15,26,11,3,4,25,6,435,605,7,95,101,5);
I$(209,function (_k, _ut, _, _v, _e, $, request, Module,
            DetailComponent, headtpl, // regualr
            // 模板拆分
            pricetpl, taxfeetpl, beancoupontpl,
            // 子组件
            Image, Promotionbar, Promotiontitle, Toapp, Addrbox, Skuprops, Form, Goodstips, Excellentcomments,
            // 各模块的逻辑
            AsyncLogic, SkuLogic, PromotionBarLogic, PromotionTitleLogic, AddrboxLogic, FormLogic,
            _p, _o, _f, _r) {

    return DetailComponent.extend({
      template: headtpl,
      data: {
        pricetpl: pricetpl, // 价格区域模板
        taxfeetpl: taxfeetpl, // 税费区域模板
        beancoupontpl: beancoupontpl //考拉豆抵扣、优惠券区域模板
      },
      config: function (data) {
        var self = this;
        self.supr();

        //数据初始化
        self.__initHeadData();

        // 等异步加载完成之后，再 $inject 到页面上
        self.$watch('_$async.ready', function (ready) {
          !!ready && self.$emit('loaded');
        });

      },
      init: function (data) {
        var self = this;
        self.supr();

        //dom数据初始化
        self.__initHeadDomData();

        // 初始化
        self.initHead();

        // 注册事件
        self.$on('buyNow', self.buyNow._$bind(self));
        self.$on('add2Cart', self.add2Cart._$bind(self));

        //window.__kaolaHeadData = data;
      },
      //数据初始化
      __initHeadData: function () {
        var self = this, data = self.data,
          goods = data.goods;

        // 父组件展示对象
        data.show = {};

        // 异步数据
        data._$async = {ready: false};

        // 默认选择的skuVid
        data.defSkuVid = _.getUrlParam('skupvs');

        // 来源页标识，如果是从搜索页过来的，则需要修改为SEARCH
        data.innerSource = self.__getInnerSource();

        // 各个子组件的数据
        var _$components = data._$components = {};

        // 图片模块
        _$components.c_image = {
          goods: goods,
          bigImg: '', //显示的大图
          kuaJingGou: !!data.kuaJingGou, //跨境购标识图
          rankGoods: !!data.rankGoods, //是否展示榜单标识图
          rankGoodsDaEvent: ['商品详情页', '榜单标识图', goods.goodsId], //榜单标识图打点
          goodsRanksTopSample: data.goodsRanksTopSample || {}, //榜单标识图数据
          selectIndex: 0 //选择的图片
        };

        // 大促、秒杀、特卖&限时购，提示条（异步获取）
        _$components.c_promotionbar = {
          goods: goods,
          async: data._$async,
          defSkuVid: data.defSkuVid
        };

        // 促销标签
        _$components.c_promotiontitle = {
          goods: goods,
          async: data._$async,
          couponTips: data.couponTips || [],
          canUseCoupon: data.canUseCoupon || false,
          show: {}, //展示
          _cache: { //缓存
            def: null,
            skuVidObj: {}
          },
          defSkuVid: data.defSkuVid
        };

        // 手机秒杀、手机专享
        _$components.c_toapp = {
          goods: goods,
          async: data._$async,
          kaolaSystemTime: data.kaolaSystemTime, //系统时间
          show: true //是否展示
        };

        // 地址选择控件
        _$components.c_addrbox = {
          goods: goods,
          async: data._$async,
          directCitys: data.directCitys
        };

        // sku属性模块
        _$components.c_skuprops = {
          async: data._$async,
          goods: goods,
          skuGoodsPropertyList: goods.skuGoodsPropertyList || [],
          skuInfo: {
            allVidList: [], //[[12,13,14],[127,128,129],..]
            selVidList: [], //[12,13,14]
            stockOutList: [] //[12,129] //在当前选中的sku情况ä¸‹ï¼ˆæ ¹æ®selVidListï¼‰ï¼Œç¼ºè´§çš„vidåˆ—è¡¨
          }
        };

        // è¡¨å•æ¨¡å—ï¼šæœ‰è´§ã€ç¼ºè´§ã€è¡¨å•æäº¤
        _$components.c_form = {
          domainUrl: data.domainUrl || '//www.kaola.com/',
          async: data._$async,
          goods: goods,
          innerSource: data.innerSource,
          form: {
            skuId: goods.skuList[0].skuId || '',
            giftList: [] //èµ å“åˆ—è¡¨
          },
          btns: {
            buyNowBtn: false, //æ˜¯å¦å±•ç¤ºç«‹å³è´­ä¹°æŒ‰é’®
            buyNowBtnStr: '', //ç«‹å³è´­ä¹°æŒ‰é’®æ–‡æ¡ˆï¼Œé»˜è®¤ã€Œç«‹å³è´­ä¹°ã€
            buyCartBtnDisable: false, //ç«‹å³è´­ä¹°ã€åŠ å…¥è´­ç‰©è½¦ æŒ‰é’®æ˜¯å¦ã€Œä¸ã€å¯ç”¨

            isShowCart: goods.isShowCart == 1,
            hideAdd2CartBtn: false, //éšè—åŠ å…¥è´­ç‰©è½¦æŒ‰é’®

            noGoodsBtn: false, //æ˜¯å¦å±•ç¤ºç¼ºè´§æŒ‰é’®
            arrivalNoticeBtn: false //æ˜¯å¦å±•ç¤ºåˆ°è´§é€šçŸ¥æŒ‰é’®
          },
          c_buynum: { // è¡¨å•æ¨¡å—-æ•°é‡ç»„ä»¶
            async: data._$async,
            goods: goods,
            show: {}
          },
          c_goodstips: { // è¡¨å•æ¨¡å—-æç¤ºç»„ä»¶
            async: data._$async,
            goods: goods,
            refundDays: data.refundDays || 7,
            tipList: []
          },
          c_favbtn: { //è¡¨å•æ¨¡å—-æ”¶è—æŒ‰é’®ç»„ä»¶
            goods: goods
          }
        };
        // è¡¨å•æ¨¡å—-æ•°é‡æŽ§ä»¶
        _$components.c_buynum = _$components.c_form.c_buynum;

        // è¡¨å•æ¨¡å—-æç¤ºç»„ä»¶
        _$components.c_goodstips = _$components.c_form.c_goodstips;

        // è¡¨å•æ¨¡å—-æ”¶è—æŒ‰é’®ç»„ä»¶
        _$components.c_favbtn = _$components.c_form.c_favbtn;

        // ç²¾åŽè¯„ä»·
        _$components.c_excellentcomments = {
          goods: goods,
          excellentcomments: data.excellentcomments || [], //ç²¾åŽè¯„è®ºåˆ—è¡¨
          commentStat: data.commentStat || {} //è¯„è®ºä¿¡æ¯
        };

        // æœ‰é»˜è®¤åˆ‡æ¢åˆ°é»˜è®¤é€‰æ‹©çš„skuï¼›å•skuåˆ™åˆ‡æ¢åˆ°è¯¥skuï¼›
        data.currentSkuVid = data.defSkuVid = data.defSkuVid || '';

      },
      //domæ•°æ®åˆå§‹åŒ–
      __initHeadDomData: function () {
        var self = this, data = self.data,
          components = data._$components,
          $refs = self.$refs;
        // åœ°å€é€‰æ‹©æŽ§ä»¶
        components.c_addrbox.target = $refs.addrTarget;
      },
      __getInnerSource: function () {
        var ref = (document.referrer || "").toLowerCase();
        //http://mm.163.com/search/xxx
        if(/\/\/[^\/]+?\/search\//.test(ref))
          return "SEARCH";
        if(_.getUrlParam('from') == 'specialtopic') { //ç»Ÿè®¡å’¨è¯¢é¡µè¿‡æ¥çš„ç”¨æˆ·
          return 'SPETOPIC';
        }
        return "DETAIL";
      },
      // ç™»å½•ä¹‹åŽåˆ·æ–°å¤´éƒ¨çš„ç™»å½•çŠ¶æ€
      refreshTopBar: function () {
        this.$emit("refreshTopBar");
      },
      destroy: function () {
        this.supr();
      }
    })
      .use('timeout')

      //æ³¨å†Œå­ç»„ä»¶
      .component('c_image', Image)
      .component('c_promotionbar', Promotionbar)
      .component('c_promotiontitle', Promotiontitle)
      .component('c_toapp', Toapp)
      .component('c_addrbox', Addrbox)
      .component('c_skuprops', Skuprops)
      .component('c_form', Form)
      .component('c_goodstips', Goodstips)
      .component('c_excellentcomments', Excellentcomments)

      //æ‰©å±•åŽŸåž‹æ–¹æ³• mixin
      .implement(AsyncLogic)
      .implement(SkuLogic)
      .implement(PromotionBarLogic)
      .implement(PromotionTitleLogic)
      .implement(AddrboxLogic)
      .implement(FormLogic)
      ;

  },1,2,15,3,4,25,6,5,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434);
I$(607,"<div class=\"commWrap\">\n\n{#if !!loading}\n  <p class=\"noRating c_999\">æ­£åœ¨åŠ è½½è¯„è®ºï¼Œè¯·ç¨å€™â€¦â€¦</p>\n\n{#elseif !!hasError || !commentList || commentList.length == 0}\n  <p class=\"noRating\">æ²¡æœ‰æ‰¾åˆ°ç¬¦åˆæ¡ä»¶çš„è¯„ä»·å“¦~</p>\n\n{#else}\n  {#list commentList as o}\n  <div class=\"eachInfo m-eachinfonew clearfix\">\n    <div class=\"commItem userinfo f-fl\">\n      {! å¤´åƒ !}\n      <div class=\"avatar\"\n           style=\"background:url('{o.avatarKaola}?imageView&thumbnail=40z40') center center no-repeat;\"></div>\n      {! ç”¨æˆ· !}\n      <div class=\"account\" r-html=\"{o.nicknameKaola||o.accountShow}\"></div>\n    </div>\n    <ul class=\"commItem commcnt f-fl\">\n      <li class=\"commcnttop clearfix\">\n        {! æ˜Ÿæ˜Ÿ !}\n          <span class=\"commstars comm-left-icon\">\n            <span class=\"emptyStar percentStar\">\n              <span r-html=\"{'&#xe621;&#xe621;&#xe621;&#xe621;&#xe621;'}\"></span>\n              <span class=\"fullStar smw{o.a_star}\" style=\"width:{o.a_starWidth}%\"\n                    r-html=\"{'&#xe60c;&#xe60c;&#xe60c;&#xe60c;&#xe60c;'}\"></span>\n            </span>\n          </span>\n        {! skuä¿¡æ¯ !}\n        <div class=\"commskulist\">\n          {#list o.skuPropertyList as sku}\n          <span>{sku.propertyName}ï¼š{sku.propertyValue}</span>\n          {/list}\n        </div>\n      </li>\n\n      {! ç”¨æˆ·è¯„è®º !}\n      {#if !!o.commentContent}\n      <li class=\"clearfix c_666\">\n        <span class=\"itemDetail\">\n          {#if !!o.commentStatus && o.commentStatus == 2}\n            <label class=\"aliasItem\">{o.alias || 'ç²¾åŽè¯„ä»·'}</label>\n          {/if}\n          {o.a_commentContent || o.commentContent}\n        </span>\n      </li>\n      {/if}\n\n      {! ç”¨æˆ·æ™’å• !}\n      {#if !!o.imgUrls && o.imgUrls.length > 0}\n      <li class=\"clearfix c_666\">\n        <div class=\"pic_list clearfix\" r-class=\"{{'z-open': !!o.open}}\">\n          {#list o.imgUrls as iurl}\n          <a href=\"javascript:void(0);\" title=\"ç‚¹å‡»é¢„è§ˆ\" class=\"pic_item\" name=\"js_preview\"\n             on-click=\"{this.toggleImg(o, iurl_index)}\"\n             r-class=\"{{'z-open': !!o.open && !!o.viewList[iurl_index].open}}\">\n            <img on-load=\"{this.viewImgLoaded($event, o, iurl_index)}\" class=\"img\"\n                 src=\"{iurl|imgThumbnailUrl:75,75}\"\n                 r-style=\"{o.viewList[iurl_index].style || {}}\"/><i\n            class=\"align_center\"></i><i class=\"mask\"></i>\n          </a>\n          {/list}\n        </div>\n\n        {! å›¾ç‰‡é¢„è§ˆ å¤§å›¾ !}\n        <div class=\"preview_box preview_style\" style=\"width:290px;\" r-hide=\"{!o.open}\">\n          <div style=\"height:290px;width:290px;overflow:hidden;\">\n            <ul class=\"clearfix\" style=\"height:290px;padding:0;width:1000px\"\n                r-style=\"{{'margin-left': o.marginLeft + 'px', 'width': (o.imgUrlsFor435.length||0)*290 + 'px'}}\">\n              {#list o.imgUrlsFor435 as iurl435}\n              {#if o.open}\n              <img on-load=\"{this.viewLargeImgLoaded($event, o, iurl435_index)}\"\n                   src=\"{iurl435|imgThumbnailUrl:290,290}\" style=\"display:none;\">\n              {/if}\n              <li class=\"preview_item\" style=\"height:290px;width:290px;\"\n                  on-click=\"{this.toggleImg(o, iurl435_index)}\">\n                {#if o.viewList[iurl435_index].lLoaded}\n                <img src=\"{iurl435|imgThumbnailUrl:290,290}\"\n                     r-style=\"{o.viewList[iurl435_index].lStyle || {}}\"><i\n                class=\"align_center\" style=\"height:290px;\"></i>\n                {#else}\n                <img src=\"/images/loading2.gif\"><i class=\"align_center\" style=\"height:290px;\"></i>\n                {/if}\n              </li>\n              {/list}\n            </ul>\n          </div>\n          <div class=\"previewbtn previewleft\" on-click=\"{this.prev(o)}\" r-hide=\"{o.hidePrevArr}\">\n            <em title=\"上一张\"></em>\n            <i class=\"icon\" r-html=\"{'&#xe623;'}\"></i>\n          </div>\n          <div class=\"previewbtn previewright\" on-click=\"{this.next(o)}\" r-hide=\"{o.hideNextArr}\">\n            <em title=\"下一张\"></em>\n            <i class=\"icon\" r-html=\"{'&#xe61f;'}\"></i>\n          </div>\n        </div>\n\n      </li>\n      {/if}\n\n      {! 追加评价和客服回复 !}\n      {#if o.a_replys.length > 0}\n\n        {#list o.a_replys as rpl}\n          {#if !!rpl.replyType && rpl.replyType == 1}\n          {! 主评客服回复 !}\n          <li class=\"clearfix c_3b6ba0 replyLi replyserv\">\n            <span class=\"replytitle f-fl\">\n              <i class=\"replyavatar\"></i>\n              <span>考拉客服</span>\n            </span>\n            <span class=\"itemDetail\">\n              {rpl.replyContent}\n            </span>\n          </li>\n          {/if}\n        {/list}\n\n        {#if !!o.a_appendReply.replyType}\n\n          {! 用户追评及追评图片 !}\n          <hr class=\"hr\"/>\n\n          {! 用户追评 !}\n          <li class=\"clearfix c_666 replyLi\">\n            <span class=\"itemDetail\">\n              <span class=\"c_999 appendTop\">{o.a_afterDayComm}</span>\n              <br>\n              {o.a_appendReply.replyContent}\n            </span>\n          </li>\n\n          {! 追评图片 !}\n          {#if !!o.a_appendReply.imgUrls && o.a_appendReply.imgUrls.length > 0}\n          <li class=\"clearfix c_666\">\n\n            <div class=\"pic_list clearfix mleft18\" r-class=\"{{'z-open': !!o.a_appendReply.open}}\">\n              {#list o.a_appendReply.imgUrls as aiurl}\n              <a href=\"javascript:void(0);\" title=\"点击预览\" class=\"pic_item\" name=\"js_preview\"\n                 on-click=\"{this.toggleImg(o.a_appendReply, aiurl_index)}\"\n                 r-class=\"{{'z-open': !!o.a_appendReply.open && !!o.a_appendReply.viewList[aiurl_index].open}}\">\n                <img on-load=\"{this.viewImgLoaded($event, o.a_appendReply, aiurl_index)}\"\n                     src=\"{aiurl|imgThumbnailUrl:100,100}\"\n                     r-style=\"{o.a_appendReply.viewList[aiurl_index].style || {}}\"/><i\n                class=\"align_center\"></i><i class=\"mask\"></i>\n              </a>\n              {/list}\n            </div>\n\n            {! 图片预览 大图 !}\n            <div class=\"preview_box preview_style\" style=\"width:290px;\" r-hide=\"{!o.a_appendReply.open}\">\n              <div style=\"height:290px;width:290px;overflow:hidden;\">\n                <ul class=\"clearfix\" style=\"height:290px;padding:0;width:1000px\"\n                    r-style=\"{{'margin-left': o.a_appendReply.marginLeft + 'px', 'width': (o.a_appendReply.imgUrlsFor435.length||0)*290 + 'px'}}\">\n                  {#list o.a_appendReply.imgUrlsFor435 as iurl435}\n                  {#if o.a_appendReply.open}\n                  <img on-load=\"{this.viewLargeImgLoaded($event, o.a_appendReply, iurl435_index)}\"\n                       src=\"{iurl435|imgThumbnailUrl:290,290}\" style=\"display:none;\">\n                  {/if}\n                  <li class=\"preview_item\" style=\"height:290px;width:290px;\"\n                      on-click=\"{this.toggleImg(o.a_appendReply, iurl435_index)}\">\n                    {#if o.a_appendReply.viewList[iurl435_index].lLoaded}\n                    <img src=\"{iurl435|imgThumbnailUrl:290,290}\"\n                         r-style=\"{o.a_appendReply.viewList[iurl435_index].lStyle || {}}\"><i\n                    class=\"align_center\" style=\"height:290px;\"></i>\n                    {#else}\n                    <img src=\"/images/loading2.gif\"><i class=\"align_center\" style=\"height:290px;\"></i>\n                    {/if}\n                  </li>\n                  {/list}\n                </ul>\n              </div>\n              <div class=\"previewbtn previewleft\" on-click=\"{this.prev(o.a_appendReply)}\" r-hide=\"{o.a_appendReply.hidePrevArr}\">\n                <em title=\"上一张\"></em>\n                <i class=\"icon\" r-html=\"{'&#xe623;'}\"></i>\n              </div>\n              <div class=\"previewbtn previewright\" on-click=\"{this.next(o.a_appendReply)}\" r-hide=\"{o.a_appendReply.hideNextArr}\">\n                <em title=\"下一张\"></em>\n                <i class=\"icon\" r-html=\"{'&#xe61f;'}\"></i>\n              </div>\n            </div>\n          </li>\n          {/if}\n\n          {! 追评客服回复 !}\n          {#if !!o.a_appendReply.replysList && o.a_appendReply.replysList.length > 0}\n            {#list o.a_appendReply.replysList as irpl}\n            <li class=\"clearfix c_3b6ba0 replyLi\">\n              <span class=\"itemDetail\">\n                <span class=\"c_d22046\">客服回复：</span>\n                {o.a_appendReply.replysList[irpl_index].replyContent}\n              </span>\n            </li>\n            {/list}\n          {/if}\n\n        {/if}\n\n      {/if}\n    </ul>\n    <ul class=\"commItem-1 commopts f-fr\">\n      {! 点赞 !}\n      <li class=\"thumbup\" on-click=\"{this.zan(o)}\">\n        <i class=\"ic\"></i><span class=\"num\">{o.zanStr}</span>\n      </li>\n      {! 移动端 !}\n      <li class=\"clearfix\">\n        {#if !!o.appType && (o.appType == 31 || o.appType == 32)}\n        <a href=\"//app.kaola.com?from=comment\" rel=\"nofollow\" class=\"comm-from-app f-fl app\" target=\"_blank\">\n          来自{o.appType==31?'iOS':'Android'}手机版\n        </a>\n        {/if}\n      </li>\n      {! 评价时间 !}\n      {#if !!o.a_createTimeStr}\n      <li class=\"clearfix c_999 dateColor\">\n        <span>{o.a_createTimeStr}</span>\n      </li>\n      {/if}\n    </ul>\n  </div>\n  {/list}\n\n{/if}\n\n</div>\n\n<div id=\"pageNavWrap\">\n  <div id=\"pageNav\">\n    <div class=\"m-centerpager clearfix\">\n      <pager total={Math.ceil(totalSize/pageSize)} current={pageNo}></pager>\n    </div>\n  </div>\n</div>\n");
I$(436,function (_k, _ut, _, _v, _e, $, request, Module,
            BaseComponent, ScrollTo, tpl, _easeinout,
            _p, _o, _f, _r) {

    return BaseComponent.extend({
      template: tpl,
      config: function () {
        var self = this, data = self.data;
        self.supr();
        data.loading = true;
        data.hasError = false;
        data.ajaxbusy = false;
        self.__update();
        self.$on('update', function (dt) {
          if(!dt) return;
          self.__update(dt.url, dt.params);
        });
        self.$watch('pageNo', function (newNo) {
          if(data.params.pageNo == newNo) return;
          data.params.pageNo = newNo;
          self.$emit('changePageNo', newNo);
          ScrollTo._$allocate({
            scrollTo: $('.j-commwrap')[0],
            offset: -50,
            duration: 50,
            timing: 'easeinout'
          });
          self.__update();
        });
      },
      __update: function (url, params) {
        var that = this, data = that.data;
        data.url = url || data.url;
        data.params = params || data.params || {};
        data.pageNo = data.params.pageNo || 1;
        data.loading = true;
        data.hasError = false;
        if(data.ajaxbusy) return;
        data.ajaxbusy = true;
        that.$emit('ajaxbusy', true);
        that.$update();

        request(data.url, {
          method: 'POST',
          data: data.params,
          type: 'json',
          norest: true,
          onload: function (json) {
            data.loading = false;
            data.ajaxbusy = false;
            that.$emit('ajaxbusy', false);
            if(json.retcode == 200 && json.commentPage && json.commentPage.result && json.commentPage.result.length) {
              var commentPage = json.commentPage;
              data.commentList = commentPage.result;
              if(commentPage.result instanceof Array) {
                //commentPage.totalCount, commentPage.pageSize || 20, commentPage.pageNo
                data.totalSize = commentPage.totalCount || 0;
                that._initData();//渲染评论列表
              }
              data.hasError = false;
            } else {
              data.hasError = true;
            }
            that.$update();
          },
          onerror: function () {
            data.hasError = true;
            data.ajaxbusy = false;
            that.$emit('ajaxbusy', false);
            that.$update();
          }
        });
      },
      //准备模板需要的数据
      _initData: function () {
        var data = this.data;
        data.commentList = data.commentList || [];
        data.commentList.forEach(function (o) {
          o.a_star = o.commentPoint * 2 || 0;
          o.a_starWidth = parseInt(o.a_star) * 10;
          o.a_days = ['当日追加', '次日追加'];
          o.a_replys = o.replyList || [];
          o.a_sysTimeStr = new Date(window.__systemTime);
          o.zanStr = parseInt(o.zanCount || 0) > 0 ? o.zanCount : "赞";
          if(o.commentContent && o.commentContent == '该用户没有填写评论。' && !!o.imgUrls && o.imgUrls.length > 0) {
            o.a_commentContent = '用户晒单';
          }
          //评价时间
          if(!!o.createTime) {
            if(o.createTime.substring(0, 4) == new Date().getFullYear()) {
              o.a_createTimeStr = o.createTime.substring(5, 7) + '.' + o.createTime.substring(8, 10);
            } else {
              o.a_createTimeStr = o.createTime.substring(0, 4) + '.' + o.createTime.substring(5, 7) + '.' + o.createTime.substring(8, 10);
            }
          }
          //追加评价和客服回复
          if(!!o.a_replys && o.a_replys.length > 0) {
            o.a_appendReply = {};
            o.a_replys.forEach(function (rpl) {
              if(!!rpl.replyType && rpl.replyType != 1) {
                o.a_appendReply = rpl;
                if(o.a_appendReply.afterDays < 2) {
                  o.a_afterDayComm = o.a_days[o.a_appendReply.afterDays];
                } else {
                  o.a_afterDayComm = o.a_appendReply.afterDays + "天后追加";
                }
              }
            });
          }
          o.avatarKaola = o.avatarKaola || '/images/product/yonghu.png';
        });
      },
      zan: function (o) {
        var that = this,
          count = o.zanCount,
          status = o.zanStatus,
          commentId = o.goodsCommentId;
        request('/commentAjax/zan.html', {
          method: 'POST',
          data: {commentId: commentId, status: !status},
          type: 'json',
          norest: true,
          onload: function (json) {
            if(json && json.retcode === 200) {
              if(status) {
                o.zanCount--;
              } else {
                o.zanCount++;
              }
              o.zanStr = parseInt(o.zanCount || 0) > 0 ? o.zanCount : "赞";
              o.zanStatus = !o.zanStatus;
              that.$update();
            }
          }
        });
      },
      // 图片onload准备
      viewImgLoaded: function (e, o, imgIdx) {
        o.viewList = o.viewList || [];
        o.viewList[imgIdx] = {
          open: false, //是否被选中（红框）
          el: e.target, //小图dom
          style: {}, //小图样式{width:, height:}
          lEl: null, //大图dom
          lStyle: null, //大图样式{width:, height:}
          lLoaded: false //大图是否load
        };
      },
      // 大图onload准备
      viewLargeImgLoaded: function (e, o, imgIdx) {
        o.viewList = o.viewList || [];
        var img = o.viewList[imgIdx],
          wh = 290, size, el;
        if(!img || !!img.lStyle) return;
        el = img.lEl = e.target;
        size = this.__getImgSizeInBox(wh, wh, el.width, el.height);
        img.lStyle = {
          width: size.width + 'px',
          height: size.height + 'px'
        };
        img.lLoaded = true;
      },
      // 切换到上一张预览图
      prev: function (o) {
        if(o.currIdx == 0 || !!o.animating) return;
        o.animating = true;

        var self = this, viewList = o.viewList || [];
        o.currIdx--;
        self.__setImgStyle(viewList, o);
        this.__easeInOut(o.marginLeft, o.marginLeft + 290, 150, function (offset) {
          o.marginLeft = offset;
          self.$update();
        }, function () {
          o.animating = false;
        });
      },
      // 切换到下一张预览图
      next: function (o) {
        if(o.currIdx == (o.imgUrlsFor435.length - 1) || !!o.animating) return;
        o.animating = true;

        var self = this, viewList = o.viewList || [];
        o.currIdx++;
        self.__setImgStyle(viewList, o);
        this.__easeInOut(o.marginLeft, o.marginLeft - 290, 150, function (offset) {
          o.marginLeft = offset;
          self.$update();
        }, function () {
          o.animating = false;
        });
      },
      // 展示/关闭预览图
      toggleImg: function (o, imgIdx) {
        var self = this,
          viewList = o.viewList || [],
          img = viewList[imgIdx] || {},
          el = img.el;
        if(!el) return;

        //展示/切换预览图
        if(!img.open) {
          o.open = true;
          o.currIdx = imgIdx;
          o.marginLeft = -o.currIdx * 290;
          self.__setImgStyle(viewList, o);
        }
        //关闭预览图
        else if(o.open && img.open) {
          o.open = false;
          viewList.forEach(function (_img) {
            _img.open = false;
            _img.style.width = 'auto';
            _img.style.height = 'auto';
          });
        }
      },
      __setImgStyle: function (viewList, o) {
        var self = this,
          imgIdx = o.currIdx;
        o.hidePrevArr = o.currIdx == 0;
        o.hideNextArr = o.currIdx == (o.imgUrlsFor435.length - 1);
        viewList.forEach(function (_img, _idx) {
          var isTar = _idx === imgIdx,
            wh = isTar ? 36 : 40,
            size;
          _img.open = isTar;
          size = self.__getImgSizeInBox(wh, wh, _img.el.width, _img.el.height);
          _img.style.width = size.width + 'px';
          _img.style.height = size.height + 'px';
        });
      },
      //图片被某个宽高限制之后，图片的宽高值
      __getImgSizeInBox: function (boxw, boxh, imgw, imgh) {
        if(!imgw) {
          return false;
        }
        if(imgw >= boxw) {
          imgh = imgh * (boxw / imgw);
          imgw = boxw;
        }
        if(imgh >= boxh) {
          imgw = imgw * (boxh / imgh);
          imgh = boxh;
        }
        return {
          width: imgw,
          height: imgh
        };
      },
      __easeInOut: function (from, to, dur, updateCb, stopCb, autoPlay /*默认：true*/) {
        var self = this;
        autoPlay = autoPlay === undefined;
        var ani = _easeinout._$$AnimEaseInOut._$allocate({
          from: {offset: from},
          to: {offset: to},
          duration: dur,
          onupdate: function (event) {
            updateCb && updateCb(event.offset);
            self.$update();
          },
          onstop: function () {
            stopCb && stopCb();
            this._$recycle();
            self.$update();
          }
        });
        !!autoPlay && ani._$play();
        return ani;
      },
      //销毁
      destroy: function () {
        this.supr();
      }
    })
      .use('timeout')
      ;

  },1,2,15,3,4,25,6,5,156,95,607,185);
I$(210,function (_k, _ut, _u, _, _v, _t, _e, LoginWindow, PromptWin, Confirm, $, request, CommentList, _p, _o, _f, _r, _pro) {

    _p._$$ActivSlide = _k._$klass();
    _pro = _p._$$ActivSlide._$extend(_t._$$EventTarget);

    _pro.__init = function (_options) {
      this.__supInit(_options);

      var PAGESIZE = 20;

      this.__goods = _options.goods || {};

      this.__ajax_busy = false; //是否有未完成的ajax

      this.__isTagActive = false; //当前选中的是否为tag标签（用于 分页、hasContent）

      this.__state = {
        goodsId: this.__goods.goodsId,
        grade: 0, //全部、好评、差评
        hasImg: 0, //是否晒图
        hasAppend: false, //是否追评
        hasContent: 1, //有内容的评价
        pageNo: 1,
        pageSize: PAGESIZE
      };

      // 评论标签
      this.__commtag = {
        goodsId: this.__goods.goodsId,
        tagName: null,
        pageNo: 1,
        pageSize: PAGESIZE
      };

      var $wrap = $('.j-userrating'); // 评论模块
      var $tab = $('.j-userratingTab');
      if(!$wrap.length || !$tab.length) return;
      this.__$wrap = $wrap;
      this.__$tab = $tab;

      //初始化评论标签 @@屏蔽此功能@@
      //self.__initCommentTag();

      // 发考拉豆的商品展示考拉豆部分文案
      this.__initGivenBean();

      this.__bindEvent();
    };

    _pro.__initGivenBean = function () {
      var self = this, goodsIds = self.__state.goodsId;
      request('/commentAjax/isGiveKaoLaBean.html', {
        method: 'POST',
        data: {goodsIds: goodsIds},
        type: 'json',
        norest: true,
        onload: function (json) {
          if(json.retcode == 200 && json.isGiveKaoLaBean) {
            $('.j-givenbean')._$delClassName('hide');
          }
        }
      });
    };

    //初始化评论标签 @@屏蔽此功能@@
    _pro.__initCommentTag = function () {
      var self = this, commtag = self.__commtag,
        state = self.__state;
      var $w = $(".j-commenttag"),
        $tabw = $(".tabw", $w);
      if($w.length || $tabw.length) return;
      request('/commentAjax/getGoodsImpression.html', {
        method: 'POST',
        data: {goodsId: state.goodsId},
        type: 'json',
        onload: function (json) {
          if(json.retcode == 200 && json.impressionMap) {
            var iarr = __object2array(json.impressionMap || {}),
              html = '';
            iarr.forEach(function (o) {
              html += '<dd class="tabli" data-tagName="' + o.key + '">' + o.key + '&ensp;<i>(' + o.val + ')' + '</i></dd>';
            });
            if(html !== '') {
              $tabw.html('<dt class="tabt">大家印象：</dt>' + html).show();
            }
            //评论标签点击事件
            $tabw.delegate(".tabli", "click", function (e) {
              commtag.pageNo = 1;
              self.__showComment(false, true, $(this));
            });
          }
        }
      });
      function __object2array(o) {
        var arr = [];
        for(var key in o) {
          if(o.hasOwnProperty(key)) {
            arr.push({key: key, val: o[key]});
          }
        }
        return arr;
      }
    };

    // 加载评论列表
    _pro.__showComment = function (isfirst, istag, $tag) {
      var self = this,
        state = self.__state,
        commtag = self.__commtag;
      var $tagList = $('.j-commenttag .tabli'), // 评论标签列表
        $selList = $('.j-commenttabs .j-tab.active'); // 评论选项（全部、晒图、追评）列表
      if(isfirst) _.daEvent('商品详情页', '评价区', '区域出现');

      self.__isTagActive = !!istag;

      $tag = $tag || $(".j-commenttag .tabli.z-sel");

      // 评论标签
      if(!!istag && $tag && $tag.length == 1) {
        commtag.tagName = $tag._$attr("data-tagName");
        $tagList._$delClassName('z-sel');
        $tag._$addClassName('z-sel');

        // 更新评论列表
        self.__updateCommentList('/commentAjax/getGoodsCommentByImpression.html', commtag);
        $selList._$delClassName('active')
          ._$children(".wrapnRadio", true)
          ._$delClassName("nRadioChecked")._$addClassName("nRadioUnchecked");
      }

      // 评论选项（全部、晒图、追评）
      if(!istag) {
        // 更新评论列表
        $tagList._$delClassName('z-sel');
        self.__updateCommentList('/commentAjax/comment_list.html', state);
      }

    };

    // 更新评论列表
    _pro.__updateCommentList = function (url, params) {
      var self = this;

      if(!self.__commentListRgl) {
        self.__commentListRgl = new CommentList({
          data: {
            url: url,
            params: params,
            pageNo: params.pageNo,
            pageSize: params.pageSize,
            totalSize: 0
          }
        });
        var wrap = $('.j-commwrap')[0];
        wrap.innerHTML = '';
        self.__commentListRgl.$inject(wrap);
        self.__commentListRgl.$on('ajaxbusy', function (isbusy) {
          self.__ajax_busy = isbusy;
        });
        self.__commentListRgl.$on('changePageNo', function (pageNo) {
          self.__state.pageNo = pageNo || 1;
          self.__commtag.pageNo = pageNo || 1;
        });
      }else{
        self.__commentListRgl.$emit('update', {url: url, params: params});
      }
    };

    _pro.__bindEvent = function () {
      var self = this;
      var $userrating = this.__$wrap, //评论模块
        $tabs = $('.j-commenttabs li.j-tab', $userrating), //评论tabs
        $content = $('.j-commenttabs li.j-content', $userrating) //评论是否有内容
        ;

      //「全部、晒图、追评、有内容的评价」切换
      this.__bindTabsChange($tabs, $content, this.__showComment._$bind(this, false));

      var wrap = self.__$wrap[0];
      var tab = self.__$tab[0];

      var winHeight = document.documentElement.clientHeight || 0; //
      var throttleFn = _.throttle(function () {
        if(wrap.getBoundingClientRect().top <= winHeight) {
          trigger();
        }
      }._$bind(self), 50, {leading: false});

      var trigger = function () {
        _v._$delEvent(window, 'scroll', throttleFn);
        _v._$delEvent(tab, 'click', trigger);
        self.__showComment(true);
      };

      //滚动加载评论
      _v._$addEvent(window, 'scroll', throttleFn);
      _v._$addEvent(tab, 'click', trigger);

    };

    //「全部、晒图、追评、有内容的评价」切换；「发表评价」按钮
    _pro.__bindTabsChange = function ($tabs, $ctt, cbFn) {
      var self = this;
      var state = self.__state,
        $labels = $tabs._$children('label', false),
        $aList = $labels._$children('a.wrapnRadio', false),
        $cttLabel = $('label', $ctt);

      // 有内容的评价 切换
      $ctt._$on('click', function () {
        if(!!self.__ajax_busy) return;
        if($cttLabel._$hasClassName('m-checked')) {
          $cttLabel._$delClassName('m-checked');
          state.hasContent = 0;
        } else {
          $cttLabel._$addClassName('m-checked');
          state.hasContent = 1;
        }
        state.pageNo = 1;
        if(self.__isTagActive) return; // 选中评论标签的时候，hasContent 不生效
        cbFn();
      });

      // 全部、晒图、追评 切换
      $labels._$on('click', function () {
        var $label = $(this), //label
          $tab = $label._$parent('li');//li
        if($tab._$hasClassName('active') || !!self.__ajax_busy) return;
        var $check = $('a.wrapnRadio', $label),
          s = $tab._$attr('data-state'), //state
          dapush = $tab._$attr('data-dapush'); //打点 label

        // 修改样式
        $aList._$delClassName('nRadioChecked')._$addClassName('nRadioUnchecked');
        $check._$delClassName('nRadioUnchecked')._$addClassName('nRadioChecked');
        $tabs._$delClassName('active');
        $tab._$addClassName('active');

        //打点
        _.daEvent('商品详情页', '评价区', dapush);

        state.grade = 0;
        state.hasImg = 0;
        state.hasAppend = false;
        state.pageNo = 1;
        //if(s == 0) {}
        if(s == 1) state.hasImg = 1;
        if(s == 2) state.hasAppend = true;

        cbFn();
      });

      // 发表评价
      var evaSending = false;
      $('.j-sendeva')._$on('click', function () {
        if(evaSending) return;

        function sendEva(){
          evaSending = true;
          request('/commentAjax/hasWaitComment.html', {
            method: 'POST',
            data: {},
            type: 'json',
            onload: function (json) {
              if(json && json.retcode === 200 && json.statusStatic && parseInt(json.statusStatic.waitComment) > 0) {
                //跳转到待评价商品列表页
                window.open((window.__domainUrl || '/') + 'personal/my_order_new.html?tradestatus=4_3&zn=addComment', '_blank');
              } else {
                //无待评价，打点
                _.daEvent('商品详情页', '发表评价', '无待评价');
                self.__errDlg('Hi，您暂时没有需要评价的商品哟~');
              }
              evaSending = false;
            },
            onerror: function () {
              self.__errDlg('网络信号不佳，请稍后重新');
              evaSending = false;
            }
          });
        }

        _u.isLogin(function(islogin) {
          if (!islogin) {
            //点击发表评价，未登录，打点
            _.daEvent('商品详情页', '发表评价', '出现登录框');
            LoginWindow._$allocate({
              logincallback: function(){
                if(!!window._$refreshTopbar){
                  window._$refreshTopbar();
                }else{
                  self._$dispatchEvent('refreshTopbar');
                }
                sendEva();
              }
            })._$show();
          } else {
            sendEva();
          }
        });

      });

    };

    _pro.__errDlg = function (text) {
      new Confirm({
        data: {
          width: 520,
          title: '提示',
          icon: 'notice',
          descOne: text || '网络或系统错误',
          txtOk: '知道了',
          hideCCBtn: true
        }
      });
    };

    return _p._$$ActivSlide;
  },1,2,26,15,3,23,4,7,8,435,25,6,436);
I$(211,function (_k, arrayPatch, _ut, _, _ck, _v, _e, _t, $, request, Module,
            LazyImg, gtm, ScrollTo, _QR,
            ListSimilar, ListGuess, ListRecent, SideRecom, //推荐位
            Head, // head regular组件
            Comment, //评论模块
            _p, _o, _f, _r) {
    var _pro;
    var _$$ProductModule = _k._$klass();
    _pro = _$$ProductModule._$extend(Module);

    _pro.__init = function (_options) {
      var self = this;
      self.__supInit(_options);

      // 同步数据
      var syncData = window.__kaolaProductData, goodsId;
      if(!syncData) throw '同步数据 window.__kaolaProductData 不存在或报错！';

      // goods
      self.__goods = syncData.goods;
      goodsId = this.__goods.goodsId;

      // 图片lazyload
      LazyImg._$allocate({exploreDist: 1000});

      // 图文详情模块
      self.__initImageDetail();

      // 导航切换模块
      self.__initNavTab();

      // 评论模块
      self.__initComment();

      // FAQ&考拉答疑折叠展开
      self.__initFAQFolder();

      // 二维码
      self.__initQrCode();

      // head组件
      self.__initHead(syncData);

      // 推荐位
      self.__initSimilarRecommend(goodsId); // 初始化「相关推荐」
      self.__initHotSaleRecommend(goodsId); // 初始化「热销排行榜」
      self.__initSeeAgainRecommend(goodsId); // 初始化「看了又看」
      self.__initGuessRecommend(goodsId); // 猜你喜欢
      self.__initRecentRecommend(); // 最近浏览

      // 打点&数据收集
      self.__qualityVedio(); // 正品保障视频点击打点
      self.__stayTimeTrace(); // 停留时长打点
      self.__gtmInit(); //GTM 数据收集

    };

    // 初始化图文详情模块
    _pro.__initImageDetail = function () {
      // 商品属性展开收起功能
      this.__bindPropertyOnOff();
      // 图文详情设置lazyload
      this.__imageDetailLazyLoad();
    };

    // 初始化导航切换模块 todo
    _pro.__initNavTab = function () {
      var $nav = $('.j-nav'), //nav bar
        $navtabs = $('.j-navtab', $nav), //所有tab
        $wrap = $('.j-goodsdetailwrap'),
        $navinfos = $('.j-navinfo', $wrap), //所有模块
        $userrating = $('.j-userrating', $wrap), //评论模块
        $goodsqa = $('.j-goodsqa', $wrap), //考拉答疑模块
        $priceintro = $('.j-priceintro', $wrap); //价格说明模块
      $navtabs._$on('click', function () {
        var $tab = $(this);
        if(!$tab._$hasClassName('active')) {

          var cls = $tab._$attr('data-info'),
            $show = $('.' + cls);
          //if($show.length !== 1) return;
          $navtabs._$delClassName('active');
          $tab._$addClassName('active');
          $navinfos._$style('display', 'none');
          $show._$style('display', 'block');

          if(cls === 'j-userrating') { //评论模块
            $goodsqa._$style('display', 'none');
            $priceintro._$style('display', 'none');
          } else if(cls === 'j-goodsqa') { //考拉答疑模块
            $userrating._$style('display', 'none');
            $priceintro._$style('display', 'none');
          } else { //图文详情模块（展示 价格说明模块）
            $userrating._$style('display', 'block');
            $goodsqa._$style('display', 'block');
            $priceintro._$style('display', 'block');
          }

          //滚动到合适位置
          ScrollTo._$allocate({
            scrollTo: $wrap[0],
            duration: 50,
            timing: 'easeinout'
          });
          $(window)._$trigger('resize'); //_v._$dispatchEvent(window,'resize');
        }
      });

      var throttlecheck = _.throttle(function check() {
        var navwrap = $wrap[0], rect;
        if(!navwrap) return;
        rect = navwrap.getBoundingClientRect();
        if(rect.top <= 0) {
          if(!$nav._$hasClassName('P_navFix')) {
            $nav._$addClassName('P_navFix');
          }
        } else {
          if($nav._$hasClassName('P_navFix')) {
            $nav._$delClassName('P_navFix');
            $nav._$attr('style', '');
          }
        }
      }._$bind(this), 50, {leading: false});

      //添加滚动事件
      _v._$addEvent(window, 'scroll', throttlecheck);
      _v._$addEvent(window, 'resize', throttlecheck);
      throttlecheck();
    };

    // 初始化评论模块
    _pro.__initComment = function () {
      Comment._$allocate({
        goods: this.__goods,
        refreshTopbar: this._$refreshTopbar._$bind(this)
      });
    };

    // FAQ&考拉答疑折叠展开
    _pro.__initFAQFolder = function(){
      var faq = $('.m-shipmentfaq');
      if (faq.length === 0) return;
      faq._$on({
        'click .fold dt': function () {
          var fold = $(this)._$parent('.fold');
          if(fold._$hasClassName('fold-open')){
            fold._$delClassName('fold-open');
          }else{
            fold._$addClassName('fold-open');
          }
        }
      });
    };

    // 图文详情小按钮处二维码
    _pro.__initQrCode = function () {
      var $wrap = $('.j-nav .j-mappbuy'),
        link = $wrap._$attr('data-wapurl'),
        $tar = $wrap._$children('.j-qrcodeic', true);
      if(!$wrap.length || !link || !$tar.length) return;
      new QRCode($tar[0], {
        text: link,
        width: 128,
        height: 128,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      });
    };

    // 初始化head组件
    _pro.__initHead = function (syncData) {
      var self = this,
        head = new Head({data: syncData});

      // 组件获取异步数据 并 初始化完成，再 $inject 到页面上
      head.$on('loaded', function(){
        // 清空SEO同步数据
        var el = _e._$get('j-producthead');
        _e._$clearChildren(el);

        head.$inject(el);

        // 触发：打点、图片lazyload、图文详情提示条定位
        setTimeout(function () {
          $(window)._$trigger('scroll');
        }, 0);

        // url hash 含有 #P_nav、#mainBtmWrap
        setTimeout(function () {
          if(window.location.href.indexOf('#P_nav') > 0 ||
            window.location.href.indexOf('#mainBtmWrap') > 0) {
            self.__scroll2Coment();
          }
        }, 1000);

        // 163广告链接进来定位到商品介绍处
        self.jumpToAnchor(window.location.search);

        // 属于保健品（在hk域下）
        if(self.__goods.isHKNourishmentCategory) {
          // 在hk域下，同步加载com域下的da.js
          self.__hkDapush2Com();
        } else {
          // 增加浏览历史
          self.__add2History(self.__goods.goodsId);
        }
      });

      head.$on('refreshTopBar', self._$refreshTopbar._$bind(self)); // 登录后刷新 navbar
      head.$on('firstChangeSku', self.firstChangeSku._$bind(self)); // sku.js中第一次触发skuVid切换
      head.$on('scroll2Comment', self.__scroll2Coment); // 滚动&切换到用户评论
      head.$on('btnChange', self.__btnChange._$bind(self)); // 大按钮修改之后，触发小按钮同步进行修改

      // 小按钮「立即购买、加入购物车」功能
      $('.j-saddcart')._$on('click', function (event) {
        head.$emit('add2Cart', event);
      });
      $('.j-sbuybtn')._$on('click', function (event) {
        head.$emit('buyNow', event);
      });
    };

    // 增加浏览历史
    _pro.__add2History = function (goodsId) {
      var LS = function (name, value) {
        var LS = window.localStorage;
        if(arguments.length > 1) {
          LS && LS.setItem(name, value);
          _ck._$cookie(name, {
            value: value,
            path: '/',
            domain: '.kaola.com'
          });
        } else {
          if(LS && !!LS.getItem(name)){
            return LS.getItem(name);
          }else{
            return _ck._$cookie(name);
          }
        }
      };
      var cookieName = 'NTES_KAOLA_RV', sp = '|', max = 20;
      var cookieStr = LS(cookieName), currTime = new Date().getTime(),
        tmpArr, currItem = [];

      if(cookieStr.trim() == '') {
        LS(cookieName, goodsId + '_' + currTime + '_0');
      } else {
        tmpArr = cookieStr.split(sp);
        tmpArr = tmpArr.filter(function (item) {
          currItem = item.split('_');
          return currItem[0] != goodsId;
        });
        tmpArr.unshift(goodsId + '_' + currTime + '_0');
        if(tmpArr.length > max) {
          tmpArr.length = max;
        }
        LS(cookieName, tmpArr.join(sp));
      }
    };

    // 由于保健品在hk域下，需要同步加载一个对应com域下的da.js（iframe实现）
    _pro.__hkDapush2Com = function () {
      var iframe = document.createElement('iframe'),
        url = (window.location.href || '').replace(/\.hk/g, '');
      if(!url) return;
      url = _.insertParamIntoUrl(url, 'callDa=true');
      // 本地模拟数据不加载iframe
      //if(~url.indexOf('localhost') || ~url.indexOf('127.0.0.1') || ~url.indexOf('http://fake.online.com/')) return;
      iframe.src = url;
      iframe.id = 'hkDapush2ComFrame';
      document.body.appendChild(iframe);
      iframe.style.display = 'none';
    };

    // 特定广告链接进入页面时定位
    _pro.jumpToAnchor = function (s) {
      if(s && s.split('=')[1] && (s.split('=')[1] == "articlepage")) {
        window.location.hash = "#articlepage";
      }
    };

    // 第一次changeSku（未选择任何 属性 和 sku）
    //  - params: {noGoods:当前选择的vid缺货, nosku:未选中某个sku}
    _pro.firstChangeSku = function (params) {
      if(!params.noGoods) { // 商品有货
        this.__initSeeBuyRecommend(this.__goods.goodsId); // 初始化「看了最终买」
      }
    };

    // 滚动&切换到用户评论
    _pro.__scroll2Coment = function (param) {
      param = param || {};
      var $tab = $('.j-userratingTab'),
        $triEl = ['',
          $('.j-commenttabs .j-commenttaball label'),
          $('.j-commenttabs .j-commenttabshow label')][param.type || 0];
      if($tab._$hasClassName('active')){
        ScrollTo._$allocate({
          scrollTo: $tab[0],
          duration: 50,
          timing: 'easeinout'
        });
      } else {
        $tab._$trigger('click');
      }
      $triEl && $triEl._$trigger('click');
    };

    // 大按钮修改之后，触发小按钮同步修改
    _pro.__btnChange = function (dt) {
      var self = this,
        btns = dt.formBtns,
        showSeckillBtn = !!dt.showSeckillBtn,
        $sbtns = $('.j-sbuybtn, .j-saddcart'),
        $sbuybtn = $(".j-sbuybtn"),
        $saddcart = $(".j-saddcart");

      // 是否不可用
      __addDelClassName($sbtns, 'disabled', !!btns.buyCartBtnDisable);

      // 是否展示「加入购物车」按钮
      var isShowCartBtn = btns.isShowCart && !!btns.buyNowBtn && !btns.hideAdd2CartBtn;

      // 添加buynowonly
      __addDelClassName($sbuybtn, 'buynowonly', !isShowCartBtn);

      // 显示/隐藏 两个按钮
      if(!showSeckillBtn && !!btns.buyNowBtn && !btns.noGoodsBtn) { // 展示立即购买/加入购物车 且 不缺货
        __addDelClassName($sbuybtn, 'hide', isShowCartBtn);
        __addDelClassName($saddcart, 'hide', !isShowCartBtn);
      } else {
        $sbuybtn._$addClassName('hide');
        $saddcart._$addClassName('hide');
      }

      // 修改 立即购买-》立即秒杀
      if(btns.buyNowBtnStr) {
        $sbuybtn._$html(btns.buyNowBtnStr || '立即购买');
      }

      // 增加 or 删除 节点的class
      function __addDelClassName($el, cname, toggle) {
        if(!$el || !cname) return;
        toggle ? $el._$addClassName(cname) : $el._$delClassName(cname);
      }
    };

    // 初始化「热销排行榜」
    _pro.__initHotSaleRecommend = function (goodsId) {
      var nodeId = 'j-listhotsale',
        hotSaleNode = _e._$get(nodeId);
      if(hotSaleNode) {
        new SideRecom({
          data: {
            url: '/product/hotsales.html',
            condition: {
              'title': '热销排行榜',
              'strategy': 'hotSale',
              'goods_id': goodsId,
              'limit': 5,
              'account': window.account || '',
              'from': 'pc',
              'ver': 2,
              'loc': 'REC_LOC_PC_GOODS_DETAIL',
              'type': 0, //0代表看过，1代表买过，2代表放购物车里
              'tongji': {
                'category': '推荐区域展示',
                'action': '商品详情页',
                'lable': '排行榜',
                'position': '商品详情页面：热销排行榜（DETAIL）',
                'from': 'detailphb',
                'query': 'rp=detail&zp=phb&zn=rec&recId='
              }
            },
            dapushParam: {id: nodeId, page: '商品详情页', module: '看了最终买'} //停留打点参数
          }
        }).$inject(hotSaleNode);
      }
    };

    // 初始化「看了又看」
    _pro.__initSeeAgainRecommend = function (goodsId) {
      var nodeId = 'j-listseeagain',
        seeAgainNode = _e._$get(nodeId);
      if(seeAgainNode) {
        new SideRecom({
          data: {
            url: '/recommend/getRecommendGoods.html',
            condition: {
              'title': '看了又看',
              'strategy': 'alsoView',
              'goods_id': goodsId,
              'limit': 6,
              'account': window.account || '',
              'from': 'pc',
              'ver': 2,
              'loc': 'REC_LOC_PC_GOODS_DETAIL',
              'type': 0, //0代表看过，1代表买过，2代表放购物车里
              'tongji': {
                'category': '推荐区域展示',
                'action': '商品详情页',
                'lable': '看了又看',
                'position': '商品详情页面：看了又看（DETAIL）',
                'from': 'detailklyk',
                'query': 'rp=detail&zp=klyk&zn=rec&recId='
              }
            },
            dapushParam: {id: nodeId, page: '商品详情页', module: '看了又看'} //停留打点参数
          }
        }).$inject(seeAgainNode);
      }
    };

    // 初始化「看了最终买」
    _pro.__initSeeBuyRecommend = function (goodsId) {
      var nodeId = 'j-listseebuy',
        seeBuyNode = _e._$get(nodeId);
      if(seeBuyNode) {
        new SideRecom({
          data: {
            url: '/recommend/getRecommendGoods.html',
            condition: {
              'title': '看了最终买',
              'strategy': 'viewBuy',
              'goods_id': goodsId,
              'limit': 6,
              'account': window.account || '',
              'from': 'pc',
              'ver': 2,
              'loc': 'REC_LOC_PC_GOODS_DETAIL',
              'type': 0, //0代表看过，1代表买过，2代表放购物车里
              'tongji': {
                'category': '推荐区域展示',
                'action': '商品详情页',
                'lable': '看了最终买',
                'position': '商品详情页面：最终购买（DETAIL）',
                'from': 'detailklzzm',
                'query': 'rp=detail&zp=klzzm&zn=rec&recId='
              }
            },
            dapushParam: {id: nodeId, page: '商品详情页', module: '看了最终买'} //停留打点参数
          }
        }).$inject(seeBuyNode);
      }
    };

    // 初始化「相关推荐」
    _pro.__initSimilarRecommend = function (goodsId) {
      var nodeId = 'j-listsimilar',
        similarNode = _e._$get(nodeId);
      if(similarNode) {
        $(similarNode)._$style({'display': 'block'});
        new ListSimilar({
          data: {
            url: '/recommend/getRecommendGoods.html',
            condition: {
              'strategy': 'bindBuy',
              'goods_id': goodsId,
              'limit': 5,
              'account': window.account || '',
              'from': 'pc',
              'ver': 2,
              'loc': 'REC_LOC_PC_GOODS_DETAIL',
              'type': 0, //0代表看过，1代表买过，2代表放购物车里
              'tongji': {
                'category': '推荐区域展示',
                'action': '商品详情页',
                'lable': '买了又买',
                'position': '商品详情页面：相关推荐（DETAIL）',
                'from': 'detailmlym',
                'query': 'rp=detail&zp=mlym&zn=rec&recId='
              }
            },
            dapushParam: {id: nodeId, page: '商品详情页', module: '相关推荐'} //停留打点参数
          }
        }).$inject(similarNode);
      }
    };

    // 猜你喜欢
    _pro.__initGuessRecommend = function (goodsId) {
      var nodeId = 'j-listguess',
        guessNode = _e._$get(nodeId);
      if(guessNode) {
        new ListGuess({
          data: {
            url: '/recommend/getRecommendGoods.html',
            condition: {
              'strategy': 'fav',
              'goods_id': goodsId,
              'limit': 4,
              'account': window.account || '',
              'from': 'pc',
              'ver': 2,
              'loc': 'REC_LOC_PC_GOODS_DETAIL',
              'type': 0, //0代表看过，1代表买过，2代表放购物车里
              'tongji': {
                'category': '推荐区域展示',
                'action': '商品详情页',
                'lable': '猜你喜欢',
                'position': '商品详情页面：猜你喜欢（DETAIL）',
                'from': 'detailcnxh',
                'query': 'rp=detail&zp=cnxh&zn=rec&recId='
              }
            },
            dapushParam: {id: nodeId, page: '商品详情页', module: '猜你喜欢'} //停留打点参数
          }
        }).$inject(guessNode);
      }
    };

    // 最近浏览
    _pro.__initRecentRecommend = function () {
      var nodeId = 'j-listrecent',
        recentNode = _e._$get(nodeId);
      if(recentNode) {
        new ListRecent({
          data: {
            url: '/recentlyViewAjax.html',
            condition: {
              'tongji': {
                'category': '推荐区域展示',
                'action': '商品详情页',
                'lable': '最近浏览',
                'position': '商品详情页面：最近浏览（DETAIL）'
              },
              'limit': 4,
              'from': 'detailzjll',
              'query': 'rp=detail&zp=zjll&zn=rec&recId='
            },
            dapushParam: {id: nodeId, page: '商品详情页', module: '最近浏览'} //停留打点参数
          }
        }).$inject(recentNode);
      }
    };

    // 正品保障视频点击打点
    _pro.__qualityVedio = function () {
      $('#qualityvedio')._$on('click', function(){
        _.daEvent('正品保障', 'button点击', '详情页视频');
      });
    };

    // 停留时长打点
    _pro.__stayTimeTrace = function(){
      var goodsId = this.__goods.goodsId;

      function stayAjax(type) {
        request('/productStay/' + goodsId + '.html?type=' + type, {method: 'POST', data: {}, type: 'json'});
      }

      stayAjax('in');
      $(window)._$on({
        'focus': function () {
          stayAjax('in');
        },
        'blur': function () {
          stayAjax('out');
        }
      });
    };

    // GTM 数据收集
    _pro.__gtmInit = function () {
      var gtmfn = gtm.gtmReadyAsync ? gtm.gtmReadyAsync : gtm.gtmReady;
      gtmfn && gtmfn({
        com_data:{
          page_type:'product',
          goods: window.__kaolaGTMGoodsData || {}
        }
      });
    };

    // 商品属性展开收起 todo
    _pro.__bindPropertyOnOff = function () {
      var $box = $('#goodsDetail'),
        $ul = $box._$children('ul.goods_parameter'),
        $li, l1h = 23, l2h = 2 * l1h, allh;
      if(!$box.length || !$ul.length) return;
      $li = $ul._$children('li');
      if($li.length <= 6) return;
      allh = Math.ceil($li.length / 3) * l1h;
      $ul._$style('height', l2h + 'px');
      $('.goodsParaTit .zk', $box)
        ._$style('display', 'inline')
        ._$on("click", function () {
          var $t = $(this);
          if($t._$hasClassName('sq')) {
            $t._$delClassName('sq')._$children('.txt')._$html('展开 ');
            $ul._$style('height', l2h + 'px');
          } else {
            $t._$addClassName('sq')._$children('.txt')._$html('收起 ');
            $ul._$style('height', allh + 'px');
          }
        });
    };

    // 图文详情设置lazyload
    _pro.__imageDetailLazyLoad = function () {
      var $box = $("#textareabox"),
        dsrc = $box._$attr("data-lazyload"),
        $imgs = $box._$children("img", true), $img;
      _ut._$object2array($imgs).forEach(function (img) {
        $img = $(img);
        $img._$attr("data-src", _.imgThumbnailUrl($img._$attr("src"), 710))
          ._$attr("src", dsrc)
          ._$addClassName("img-lazyload");
      });
    };

    _$$ProductModule._$allocate();
  },1,206,2,15,11,3,4,23,25,6,5,24,44,95,20,207,82,164,208,209,210);