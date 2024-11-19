import { useState } from "react";
import questions from "../../../../../fake-apis/questions";
import { Collapse } from "antd";
import { AiOutlineDown } from "react-icons/ai";
import "./QuestionsCollapse.scss";

const QuestionsCollapse = () => {
  const [activeKey, setActiveKey] = useState<string | null>("0");

  const handleChange = (key: string | string[]) => {
    setActiveKey(key?.toString() || null);
  };

  const collapseItems = questions.map((item: any, idx: number) => ({
    key: String(idx),
    label: (
      <div className="header_content">
        <h2 className="question">
          <span className="question_number">Q{idx + 1}.</span>
          {item.question}
        </h2>
        <div className={`icon ${activeKey === String(idx) ? "rotate" : ""}`}>
          <AiOutlineDown color="#fff" size={16} />
        </div>
      </div>
    ),
    children: <p>{item.answer}</p>,
  }));

  return (
    <Collapse
      accordion
      bordered={false}
      defaultActiveKey={["0"]}
      items={collapseItems}
      onChange={handleChange}
    />
  );
};

export default QuestionsCollapse;
