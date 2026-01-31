import { useState } from "react";

function CreatePage(){
    // 初期値は""
    // const [title, setTitle] = useState("");
    let title ="初期タイトル";
    const handleGenerate =()=> {
        console.log("音楽生成開始");
    };
    return (
        <div>
            <h1>音楽作成ページ</h1>
            <div>
                <div>
                    <label>楽曲タイトル</label>
                    <div>{title}</div>
                    <input type="text" 
                    onChange={(e) => {
                        title=e.target.value
                        console.log(title)
                    }}
                    placeholder="楽曲のタイトルを入力"/>
                </div>
                <div>
                    <label>ジャンル</label>
                    <select>
                        <option value="">ジャンルを選択</option>
                        <option value="electronic">エレクトロニック</option>
                        <option value="jazz">ジャズ</option>
                        <option value="classic">クラシック</option>
                        <option value="ambient">アンビエント</option>
                        <option value="rock">ロック</option>
                        <option value="pop">ポップ</option>
                    </select>
                </div>
            </div>

            <div>
                <label>音楽の説明</label>
                <textarea placeholder="どんな音楽を作りたいか説明してください" />
            </div>
            <button onClick={handleGenerate}>音楽を生成</button>
        </div>
    )
}

export default CreatePage