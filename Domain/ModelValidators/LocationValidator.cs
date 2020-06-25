using Exam.Domain.Models;
using FluentValidation;

namespace Exam
{
    internal class LocationValidator : AbstractValidator<Location>
    {
        public LocationValidator()
        {
            RuleFor(x => x.Id).NotNull();
        }
    }
}