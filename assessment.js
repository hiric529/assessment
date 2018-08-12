（function（）{
    ' use strict ' ;
    const  userNameInput  =  document。getElementById（' user-name '）;
    const  assessmentButton  =  ドキュメント。getElementById（' assessment '）;
    const  resultDivided  =  document。getElementById（' result-area '）;
    const  tweetDivided  =  ドキュメント。getElementById（' tweet-area '）;
  
    / **
    *指定した要素の子どもをすべて削除する
    * @param  {HTMLElement}  要素 HTMLの要素
    * /
    関数 removeAllChildren（要素）{
        一方、（要素。のfirstChild）{ //子どもの要素があるかぎり削除
            要素。removeChild（要素。のfirstChild）。
        }
    }
  
    assessmentButton。onclick  =（）=> {
        const  userName  =  userNameInput。値 ;
        もし（userNameに。長 ===  0）{ //名前が空の時は処理を終了する
            戻る ;
        }
  
        //診断結果表示エリアの作成
        removeAllChildren（resultDivided）;
        const  ヘッダ =  ドキュメント。createElement（' h3 '）;
        ヘッダー。innerText  =  '診断結果' ;
        resultDivided。appendChild（ヘッダ）;
  
        const  paragraph  =  document。createElement（' p '）;
        const  result  =  評価（ユーザ名）;
        段落。innerText  =結果;
        resultDivided。appendChild（段落）;
  
        //ツイートエリアの作成
        removeAllChildren（tweetDivided）;
        const  anchor  =  ドキュメント。createElement（' a '）;
        const  hrefValue  =  ' https://twitter.com/intent/tweet?button_hashtag=%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%81%84%E3 ％81％84％E3％81％A8％E3％81％93％E3％82％8D＆text = '
        +  encodeURIComponent（結果）;
        アンカー。setAttribute（' href '、hrefValue）;
        アンカー。className  =  ' twitter-hashtag-button ' ;
        アンカー。innerText  =  ' Tweet＃％E3％81％82％E3％81％AA％E3％81％9F％E3％81％A3％E3％81％84％E3％81％84％E3％81％A8％E3％ 81％93％E3％82％8D ' ;
        tweetDivided。appendChild（アンカー）;
  
        twttr。ウィジェット。load（）;
    };
  
    userNameInput。onkeydown  =（イベント）=> {
        もし（イベント。キーコード ===  13）{
            assessmentButton。onclick（）;
        }
    };
  
    const  答え = [
        ' {userName}のいいところは声です。{userName}の特徴的な声はみんなを惹きつけ、心に残します。'、
        ' {userName}のいいところはまったくです。{userName}に見つめられた人は、気になって仕方がないです。'、
        ' {userName}のいいところは情熱です。{userName}の情熱に周りの人は感謝されます。'、
        ' {userName}のいいところは厳しいさです。{userName}の厳しさがあるのをご存知でいつでも成功に導きます。'、
        ' {userName}のいいところは知識です。博識な{userName}をたくさんの人が頼りにしています。'、
        ' {userName}のいいところは、ユニークさです。{userName}だけのその特徴が、皆さんを楽しくさせます。'、
        ' {userName}のいいところは用心深さです。{userName}の洞察に、たくさんの人が助けられます。'、
        ' {userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。'、
        ' {userName}のいいところは決済力です。{userName}がする決断にはいつか助けられる人がいます。'、
        ' {userName}のいいところは思っています。{userName}に気をかけてもらったたくさんの人が感謝しています。'、
        ' {userName}のいいところは感受性です。{userName}が感じたことに皆が共感して、わかりあうことができます。'、
        ' {userName}のいいところは節度です。強引すぎない{userName}の考え方に皆が感謝しています。'、
        ' {userName}のいいところは好奇心です。新しいことに向かってたくさん{userName}の心構えがたくさんの人に魅力的に映ります。'、
        ' {userName}のいいところは気配りです。{userName}の配達はたくさんの人を救っています。'、
        ' {userName}のいいところはそんなことです。ありのままの{userName}自分がいてころなです。'、
        ' {userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userNameに}が皆から評価されています。',
        ' {userName}のいいところは優しさです。{userName}の優しい雰囲気や立ち振る舞いに多くの人が癒されています。'
    ];
  
    / **
    *名前の文字列を渡して診断結果を返す関数
    * @param  {string}  userNameユーザーの名前
    * @return  {string}の検索結果
    * /
    機能 評価（userName）{
        //全文のコード番号を取得してそれを足し合わせる
        聞かせて sumOfcharCode =  0 ;
        用（せ iは=  0 ; iが<  ユーザー名。長さ、iが++）{
            sumOfcharCode = sumOfcharCode +  userName。charCodeAt（i）;
        }
  
        //文字のコード番号の合計を回答の数で割った添え字の数を求める
        const  インデックス = sumOfcharCode ％の 答え。長さ ;
        聞かせて結果=の答え[インデックス]。
  
        結果=  結果。置き換えます（/ {userName} / g、userName）。
        結果を返す。
    }
  
    //テストコード
    コンソール。断言する（
        評価（'太郎'）===  '太郎のいいところは決済力です。太郎がする決断にはいつも助けられる人がいます。'、
        '診断結果の文言の特定の部分を名前に置き換えて処理が正当にありません。'
    ）;
    コンソール。断言する（
        査定（'太郎'）===  査定（'太郎'）、
        '入力が同じ名前に同じ診断結果を出力する処理が正解なしです。'
    ）;
  }）（）;

