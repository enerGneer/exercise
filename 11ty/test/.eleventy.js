module.exports = function(eleventyConfig) {
  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "src",        // 현재 폴더를 기준
      includes: "_includes",  // 컴포넌트 폴더
      output: "_build"   // 결과물도 test/_build 로 출력
    }
  };
};
