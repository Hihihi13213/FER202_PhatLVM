// src/redux/quizSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [],          // Danh sách câu hỏi lấy từ API/data
  currentQuestion: 0,     // Chỉ số câu hỏi hiện tại (0-indexed)
  selectedAnswers: {},    // Lưu trữ các câu trả lời đã chọn, ví dụ: { [questionId]: "selectedOption" }
  score: 0,               // Điểm số của người dùng
  isSubmitted: false,     // Đã nộp bài hay chưa
  reviewMode: false,      // Chế độ xem lại bài
  loading: false,         // Trạng thái đang tải dữ liệu
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    // Thiết lập danh sách câu hỏi
    setQuestions: (state, action) => {
      state.questions = action.payload;
      state.loading = false;
    },
    // Thay đổi câu hỏi hiện tại bằng index
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    // Chọn/Cập nhật đáp án cho một câu hỏi
    selectAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      state.selectedAnswers[questionId] = answer;
    },
    // Nộp bài: tính điểm dựa trên đáp án đã chọn và đáp án đúng
    submitQuiz: (state) => {
      let tempScore = 0;
      state.questions.forEach((q) => {
        const userAnswer = state.selectedAnswers[q.id];
        if (userAnswer === q.correctAnswer) {
          tempScore += 1;
        }
      });
      state.score = tempScore;
      state.isSubmitted = true;
      state.reviewMode = true;
    },
    // Reset lại toàn bộ trạng thái để làm lại bài
    resetQuiz: (state) => {
      state.currentQuestion = 0;
      state.selectedAnswers = {};
      state.score = 0;
      state.isSubmitted = false;
      state.reviewMode = false;
    },
    // Thiết lập trạng thái loading
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setQuestions,
  setCurrentQuestion,
  selectAnswer,
  submitQuiz,
  resetQuiz,
  setLoading,
} = quizSlice.actions;

export default quizSlice.reducer;
