using System.ComponentModel;

namespace Exam.Domain
{
    public enum Rating : byte
    {
        [Description("great")]
        Great = 3,
        [Description("good")]
        Good = 2,
        [Description("avoid")]
        Avoid = 1
    }
}
