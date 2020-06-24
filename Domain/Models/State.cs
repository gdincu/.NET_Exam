using System.ComponentModel;

namespace Exam.Domain.Models
{
    public enum State : byte
    {
        [Description("active")]
        Active = 1,
        [Description("upcoming")]
        Upcoming = 2,
        [Description("completed")]
        Completed = 3,
        [Description("cancelled")]
        Cancelled = 4
    }
}
