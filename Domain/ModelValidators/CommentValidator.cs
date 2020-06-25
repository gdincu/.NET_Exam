using Exam.Domain.Models;
using FluentValidation;

namespace Exam
{
    internal class CommentValidator : AbstractValidator<Comment>
    {
        public CommentValidator()
        {
            RuleFor(x => x.Id).NotNull();
        }
    }
}