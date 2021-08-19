import logo from './logo.svg';
import styled from 'styled-components';
import {MEDIA_QUERY_MD, MEDIA_QUERY_SM} from './constansts/style.js'
const TodoItemWrapper = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  border: 1px solid ${props => props.theme.colors.border};
  padding: 10px 10px;
  align-items: center;
  justify-content: space-between;
  & + & {
    margin-top: 20px;
  }
`

const TodoContent = styled.div`
  color: ${props => props.theme.colors.font};
  ${MEDIA_QUERY_MD} {
    font-size: 16px;
  }
  ${MEDIA_QUERY_SM} {
    font-size: 12px;
  }
  // 透過三源運算子來修改
  ${props => props.$isDone && `
    text-decoration: line-through;
  `}

`
const TodoButtonWrapper = styled.div``

const Button = styled.button`
  padding: 5px;
  & + & {
    margin-left: 10px;
  }
  border-radius: 5px;
  background-color: ${props => props.theme.colors.first_button};

  ${MEDIA_QUERY_MD} {
    font-size: 16px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 12px;
  }
`

const DeletedButton = styled(Button)`
  background-color: ${props => props.theme.colors.second_button};
  color: ${props => props.theme.colors.button_font};
`
function TodoItem({ className, size, content, todo, handleDeleteTodo, handleIsDoneButton}) {
  return (
    <TodoItemWrapper className={className}>
      {/* 不想要被 render 在畫面的屬性用 $ pre-suffix, style-comonet 用的 */}
      <TodoContent $size={size} data-todo-id={todo.id} $isDone={todo.isDone}>{content}</TodoContent>
      <TodoButtonWrapper>
      {/* //子component 要對 母component 修改的話，要透過函式來達成 */}
      <Button onClick={() => { handleIsDoneButton(todo.id)}}>{todo.isDone? '已完成' : '未完成'}</Button>
      <DeletedButton onClick={() => { handleDeleteTodo(todo.id) }}>刪除</DeletedButton>
      </TodoButtonWrapper>
    </TodoItemWrapper>
  )
}


export { TodoItem }