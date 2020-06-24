using System;
using FluentValidation;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Exam.Domain.Models;

namespace Exam.Domain.ModelValidators
{
    public class BookingValidator : AbstractValidator<Booking>
    {
        public BookingValidator()
        {
            RuleFor(x => x.Id).NotNull();
            RuleFor(x => x.Added).GreaterThan(DateTime.Now);
            RuleFor(x => x.State).NotEqual(State.Completed);
        }
    }
}
