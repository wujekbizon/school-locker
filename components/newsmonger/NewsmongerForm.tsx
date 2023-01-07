import './NewsmongerForm.scss';
import { useState } from 'react';
import Image from 'next/image';

const NewsmongerForm = () => {
  const [email, setEmail] = useState('');

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();

    // email validation
    if (!email || !email.includes('@') || email.trim() === '') {
      console.log('invalid email');
    }

    try {
      const response = await fetch('/api/newsmonger', {
        method: 'POST',
        body: JSON.stringify({
          email,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setEmail('');
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="newsmonger-wrapper">
      <Image
        className="form-top"
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTI5cHgiIGhlaWdodD0iMTU4cHgiIHZpZXdCb3g9IjAgMCAxMjkgMTU4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OSAoNTEwMDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkdseXBoZSAxPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkxhbmRpbmctcGFnZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyLjAwMDAwMCwgLTI4MzkuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJTdWJzY3JpYmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjAwMDAwMCwgMjgyOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJzdWJzY3JpYmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1LjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR2x5cGhlLTEiPgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTctQ29weS0yIiBmaWxsPSIjMTNBREM3IiBvcGFjaXR5PSIwLjUxMDEwMDQ0NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTkuNTAwMDAwLCAxMjUuMjM5NTA2KSByb3RhdGUoNTQuMDAwMDAwKSB0cmFuc2xhdGUoLTU5LjUwMDAwMCwgLTEyNS4yMzk1MDYpICIgeD0iMzQiIHk9IjcwLjg2OTEzNTgiIHdpZHRoPSI1MSIgaGVpZ2h0PSIxMDguNzQwNzQxIiByeD0iMjUuNSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTciIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY5LjUwMDAwMCwgODguOTkyNTkzKSByb3RhdGUoNTQuMDAwMDAwKSB0cmFuc2xhdGUoLTY5LjUwMDAwMCwgLTg4Ljk5MjU5MykgIiB4PSI0NCIgeT0iMzQuNjIyMjIyMiIgd2lkdGg9IjUxIiBoZWlnaHQ9IjEwOC43NDA3NDEiIHJ4PSIyNS41Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtNy1Db3B5IiBzdHJva2U9IiM3QjYxRkYiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43MTM1NjAyNjgiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4OS41MDAwMDAsIDUyLjc0NTY3OSkgcm90YXRlKDU0LjAwMDAwMCkgdHJhbnNsYXRlKC04OS41MDAwMDAsIC01Mi43NDU2NzkpICIgeD0iNjUiIHk9Ii0wLjYyNDY5MTM1OCIgd2lkdGg9IjQ5IiBoZWlnaHQ9IjEwNi43NDA3NDEiIHJ4PSIyNC41Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
        alt="logo"
        width={150}
        height={150}
      />
      <div className="form-title">
        <h2>Subscribe for the latest rumors. Best source of information.</h2>
      </div>

      <div className="form">
        <form onSubmit={onSubmitHandler}>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email address"
            required
          />
          <button>Subscribe</button>
        </form>
      </div>

      <div className="form-info">
        <h3>
          Keep updated on blog posts with{' '}
          <span className="form-rrs">
            <a href="">our RSS Feed!</a>
          </span>
        </h3>
      </div>
      <Image
        className="form-bottom"
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTI5cHgiIGhlaWdodD0iMTU4cHgiIHZpZXdCb3g9IjAgMCAxMjkgMTU4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OSAoNTEwMDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkdseXBoIDI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iTGFuZGluZy1wYWdlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA2OC4wMDAwMDAsIC0zMDMyLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iU3Vic2NyaWJlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMy4wMDAwMDAsIDI4MjkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0ic3Vic2NyaWJlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNS4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkdseXBoLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMjYuMDAwMDAwLCAxOTMuMDE0ODE1KSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtNy1Db3B5LTQiIGZpbGw9IiM5NDVERDUiIG9wYWNpdHk9IjAuMjY3NjMzOTI5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1OS41Mjk1NDQsIDEyNS4xNDYyMTQpIHJvdGF0ZSg1NC4wMDAwMDApIHRyYW5zbGF0ZSgtNTkuNTI5NTQ0LCAtMTI1LjE0NjIxNCkgIiB4PSIzNC4wMjk1NDM2IiB5PSI3MC43NzU4NDM5IiB3aWR0aD0iNTEiIGhlaWdodD0iMTA4Ljc0MDc0MSIgcng9IjI1LjUiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS03LUNvcHktMyIgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODkuNTI5NTQ0LCA1Mi42NTIzODcpIHJvdGF0ZSg1NC4wMDAwMDApIHRyYW5zbGF0ZSgtODkuNTI5NTQ0LCAtNTIuNjUyMzg3KSAiIHg9IjY0LjAyOTU0MzYiIHk9Ii0xLjcxNzk4MzIyIiB3aWR0aD0iNTEiIGhlaWdodD0iMTA4Ljc0MDc0MSIgcng9IjI1LjUiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS03LUNvcHktNSIgc3Ryb2tlPSIjMTNBREM3IiBzdHJva2Utd2lkdGg9IjIiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2OS41Mjk1NDQsIDg4Ljg5OTMwMSkgcm90YXRlKDU0LjAwMDAwMCkgdHJhbnNsYXRlKC02OS41Mjk1NDQsIC04OC44OTkzMDEpICIgeD0iNDUuMDI5NTQzNiIgeT0iMzUuNTI4OTMwNCIgd2lkdGg9IjQ5IiBoZWlnaHQ9IjEwNi43NDA3NDEiIHJ4PSIyNC41Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
        width={150}
        height={150}
        alt="logo"
      />
    </div>
  );
};
export default NewsmongerForm;
