# 柑叙乌云品牌官网

面向甜品与鲜果品牌「柑叙乌云」的宣传网站，展示产品、品牌故事和不定期活动。

## 技术栈

- 前端：React 19、Next.js/Vinext、TypeScript、CSS
- 后端：Python、FastAPI
- 内容接口：产品、活动、健康检查

## 本地运行

前端：

```bash
pnpm install
pnpm dev
```

后端：

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r backend/requirements-dev.txt
uvicorn backend.app.main:app --reload
```

前端默认运行在 `http://localhost:3000`，FastAPI 默认运行在 `http://localhost:8000`，接口文档位于 `http://localhost:8000/docs`。

## 更新活动

编辑 `backend/data/events.json` 即可更新活动内容。接口地址为 `/api/events`。

## 产品信息来源

提拉米苏起售价与风味名称参考项目筹备预算表；其他定制类产品在网站上使用咨询式价格文案，避免展示未经确认的固定价格。
