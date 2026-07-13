// src/redux/quizThunk.js
import { setQuestions, setLoading } from './quizSlice';
import { questionsData } from '../data/questions';

/**
 * Thunk action creator để giả lập gọi API lấy danh sách câu hỏi.
 * Sử dụng setTimeout để trì hoãn 1 giây (1000ms).
 */
export const fetchQuestions = () => {
  return async (dispatch) => {
    // Bật trạng thái loading trước khi tải dữ liệu
    dispatch(setLoading(true));
    
    setTimeout(() => {
      // Đưa dữ liệu câu hỏi vào store và tự động tắt loading
      dispatch(setQuestions(questionsData));
    }, 1000);
  };
};
