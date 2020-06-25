using Exam.Domain.Models;
using FluentValidation;

namespace Exam
{
    internal class UserValidator : AbstractValidator<User>
    {
        public UserValidator()
        {
            RuleFor(x => x.Id).NotNull();
            RuleFor(x => x.Email).EmailAddress();
        }
    }
}